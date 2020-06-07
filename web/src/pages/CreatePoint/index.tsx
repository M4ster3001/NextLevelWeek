import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker  } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
//import axios from 'axios';

import api from '../../services/api'; 

import './styles.css';

import logo from '../../assets/logo.svg';

interface Item {
    id: number;
    title: string;
    image_url: string;
}

interface State {
    id: number;
    name: string;
    uf: string;
}

interface City {
    id: number;
    name: string;
}

const CreatePoint = () => {

    const [ items, setItems ] = useState<Item[]>([]);
    const [ states, setStates ] = useState<State[]>([]);
    const [ cities, setCities ] = useState<City[]>([]);

    const [ initialPosition, setInitialPosition ] = useState<[number, number]>([0, 0]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const [ selectedUf, setSelectedUf ] = useState('0');
    const [ selectedCity, setSelectedCity ] = useState('0');
    const [ selectedPosition, setSelectedPosition ] = useState<[number, number]>([0, 0]);
    const [ selectedItems, setSelectedItems ] = useState<number[]>([]);

    const history = useHistory();

    useEffect( () => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            setInitialPosition([ latitude, longitude ]);
        })
    })

    useEffect( () => {

        api.get( 'items' ).then( res => 
            setItems( res.data )
        );

    }, []);

    useEffect( () => {

        api.get( 'states' ).then( res => 
            setStates( res.data )
        );

    }, []);

    useEffect( () => {

        api.get( `cities/${ selectedUf }`).then( res => 
            setCities( res.data )
        );

    }, [selectedUf]);

    function handleSelectUf(e: ChangeEvent<HTMLSelectElement>) {

        e.preventDefault();
        const uf = e.target.value;

        setSelectedUf( uf );
    }

    function handleSelectCity(e: ChangeEvent<HTMLSelectElement>) {

        e.preventDefault();
        const city = e.target.value;

        setSelectedCity( city );
    }

    function handleClickMap( e: LeafletMouseEvent ) {
       setSelectedPosition([
           e.latlng.lat,
           e.latlng.lng
       ])
    }

    function handleInputChange( e: ChangeEvent<HTMLInputElement> ) {

        const { id, value } = e.target;

        setFormData({
            ...formData, [id]: value
        });

    }

    async function handleSubmit( e: FormEvent){
        e.preventDefault();

        const { name, email, phone } = formData;
        const uf = selectedUf;
        const city = selectedCity;
        const [latitude, longitude] = selectedPosition;
        const items = selectedItems;

        const data = {
            name, 
            email, 
            phone,
            uf,
            city,
            latitude,
            longitude,
            items
        }

        await api.post( '/points' , data);

        alert( 'Ponto de coleta criado!!!' );

        history.push('/');
    }

    function handleSelectItem( id:number ) {

        const alreadySelected = selectedItems.findIndex( item => item === id );

        if( alreadySelected >= 0 ){
            const filteredItems = selectedItems.filter( item => item !== id );
            
            setSelectedItems( filteredItems );

        } else {

            setSelectedItems([
                ...selectedItems, id
            ]);

        }
    }

    return (
       <div id="page-create-point">
           <header>
               <img src={ logo } alt="Ecoleta" />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para a home
                </Link>
           </header>

           <form onSubmit={handleSubmit}>
               <h2>Cadastro do <br />ponto de coleta</h2>

               <fieldset>
                   <legend>
                       <h2>Dados</h2>
                   </legend>

                   <div className="field">
                       <label htmlFor="name">Nome da entidade</label>
                       <input 
                        type="text"
                        id="name"
                        className="name"
                        onChange={handleInputChange}
                       />
                   </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail </label>
                            <input 
                                type="email"
                                id="email"
                                className="email"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="phone">Telefone </label>
                            <input 
                                type="text"
                                id="phone"
                                className="phone"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
               </fieldset>

               <fieldset>
                   <legend>
                       <h2>Endereço</h2>
                       <span>
                           selecione um endereço no mapa
                       </span>
                   </legend>

                   <Map 
                    center={ initialPosition } 
                    zoom={15}
                    onClick={ handleClickMap }
                   >
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={ selectedPosition } />
                   </Map>

                   <div className="field-group">
                       <div className="field">
                           <label htmlFor="uf">Estados (UF)</label>
                           <select 
                            onChange={handleSelectUf} 
                            value={ selectedUf } 
                            name="uf" 
                            id="uf"
                           >
                               <option value="0">Selecione uma UF</option>
                                {
                                    states.map( ( state, k ) =>
                                        <option key={ k } value={ state.uf }>{state.uf}</option>
                                    )
                                }
                           </select>
                       </div>
                       <div className="field">
                           <label htmlFor="city">Cidades </label>
                           <select 
                            name="city" 
                            id="city"
                            onChange={handleSelectCity}
                            value={selectedCity}
                           >
                                <option value="0">Selecione uma cidade</option>
                                {
                                    cities.map( city =>
                                        <option key={ city.id } value={ city.name }>{city.name}</option>
                                    )
                                }
                           </select>
                       </div>
                   </div>
               </fieldset>

               <fieldset>
                   <legend>
                       <h2>Itens de coleta</h2>
                       <span>Selecione um ou mais itens abaixo</span>
                   </legend>

                   <ul className="items-grid">
                       { items.map( ( item, k ) =>
                            <li 
                                key={ k } 
                                onClick={ () => handleSelectItem(item.id) }
                                className={ selectedItems.includes( item.id ) ? 'selected' : '' }
                            >
                                <img src={`http://localhost:3333/uploads/${item.image_url}`} alt="oleo" />
                                <span>{ item.title }</span>
                            </li>
                       )}
                       
                   </ul>
               </fieldset>

               <button>Cadastrar ponto de coleta</button>
           </form>
       </div>
    );
}

export default CreatePoint;
