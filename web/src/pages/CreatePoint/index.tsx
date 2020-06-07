import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker  } from 'react-leaflet';
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

    const [ selectedUf, setSelectedUf ] = useState('0');

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

    return (
       <div id="page-create-point">
           <header>
               <img src={ logo } alt="Ecoleta" />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para a home
                </Link>
           </header>

           <form>
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
                       />
                   </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="e-mail">E-mail </label>
                            <input 
                                type="email"
                                id="e-mail"
                                className="e-mail"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="phone">Telefone </label>
                            <input 
                                type="text"
                                id="phone"
                                className="phone"
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

                   <Map center={[ -21.8110753, -50.1266774 ]} zoom={15}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={[ -21.8110753, -50.1266774 ]} />
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
                           <select name="city" id="city">
                                <option value="0">Selecione uma cidade</option>
                                {
                                    cities.map( city =>
                                        <option key={ city.id } value={ city.id }>{city.name}</option>
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
                            <li key={ k }>
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
