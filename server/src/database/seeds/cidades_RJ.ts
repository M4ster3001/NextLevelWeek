import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
	return knex("cities").insert([
{ name: 'Angra Dos Reis', name_order: 'Angra Dos Reis', uf: 'RJ' },
			{ name: 'Aperibé', name_order: 'Aperibe', uf: 'RJ' },
			{ name: 'Araruama', name_order: 'Araruama', uf: 'RJ' },
			{ name: 'Areal', name_order: 'Areal', uf: 'RJ' },
			{ name: 'Armação Dos Búzios', name_order: 'Armacao Dos Buzios', uf: 'RJ' },
			{ name: 'Arraial do Cabo', name_order: 'Arraial do Cabo', uf: 'RJ' },
			{ name: 'Barra do Piraí', name_order: 'Barra do Pirai', uf: 'RJ' },
			{ name: 'Barra Mansa', name_order: 'Barra Mansa', uf: 'RJ' },
			{ name: 'Belford Roxo', name_order: 'Belford Roxo', uf: 'RJ' },
			{ name: 'Bom Jardim', name_order: 'Bom Jardim', uf: 'RJ' },
			{ name: 'Bom Jesus do Itabapoana', name_order: 'Bom Jesus do Itabapoana', uf: 'RJ' },
			{ name: 'Cabo Frio', name_order: 'Cabo Frio', uf: 'RJ' },
			{ name: 'Cachoeiras de Macacu', name_order: 'Cachoeiras de Macacu', uf: 'RJ' },
			{ name: 'Cambuci', name_order: 'Cambuci', uf: 'RJ' },
			{ name: 'Carapebus', name_order: 'Carapebus', uf: 'RJ' },
			{ name: 'Comendador Levy Gasparian', name_order: 'Comendador Levy Gasparian', uf: 'RJ' },
			{ name: 'Campos Dos Goytacazes', name_order: 'Campos Dos Goytacazes', uf: 'RJ' },
			{ name: 'Cantagalo', name_order: 'Cantagalo', uf: 'RJ' },
			{ name: 'Cardoso Moreira', name_order: 'Cardoso Moreira', uf: 'RJ' },
			{ name: 'Carmo', name_order: 'Carmo', uf: 'RJ' },
			{ name: 'Casimiro de Abreu', name_order: 'Casimiro de Abreu', uf: 'RJ' },
			{ name: 'Conceição de Macabu', name_order: 'Conceicao de Macabu', uf: 'RJ' },
			{ name: 'Cordeiro', name_order: 'Cordeiro', uf: 'RJ' },
			{ name: 'Duas Barras', name_order: 'Duas Barras', uf: 'RJ' },
			{ name: 'Duque de Caxias', name_order: 'Duque de Caxias', uf: 'RJ' },
			{ name: 'Engenheiro Paulo de Frontin', name_order: 'Engenheiro Paulo de Frontin', uf: 'RJ' },
			{ name: 'Guapimirim', name_order: 'Guapimirim', uf: 'RJ' },
			{ name: 'Iguaba Grande', name_order: 'Iguaba Grande', uf: 'RJ' },
			{ name: 'Itaboraí', name_order: 'Itaborai', uf: 'RJ' },
			{ name: 'Itaguaí', name_order: 'Itaguai', uf: 'RJ' },
			{ name: 'Italva', name_order: 'Italva', uf: 'RJ' },
			{ name: 'Itaocara', name_order: 'Itaocara', uf: 'RJ' },
			{ name: 'Itaperuna', name_order: 'Itaperuna', uf: 'RJ' },
			{ name: 'Itatiaia', name_order: 'Itatiaia', uf: 'RJ' },
			{ name: 'Japeri', name_order: 'Japeri', uf: 'RJ' },
			{ name: 'Laje do Muriaé', name_order: 'Laje do Muriae', uf: 'RJ' },
			{ name: 'Macaé', name_order: 'Macae', uf: 'RJ' },
			{ name: 'Macuco', name_order: 'Macuco', uf: 'RJ' },
			{ name: 'Magé', name_order: 'Mage', uf: 'RJ' },
			{ name: 'Mangaratiba', name_order: 'Mangaratiba', uf: 'RJ' },
			{ name: 'Maricá', name_order: 'Marica', uf: 'RJ' },
			{ name: 'Mendes', name_order: 'Mendes', uf: 'RJ' },
			{ name: 'Mesquita', name_order: 'Mesquita', uf: 'RJ' },
			{ name: 'Miguel Pereira', name_order: 'Miguel Pereira', uf: 'RJ' },
			{ name: 'Miracema', name_order: 'Miracema', uf: 'RJ' },
			{ name: 'Natividade', name_order: 'Natividade', uf: 'RJ' },
			{ name: 'Nilópolis', name_order: 'Nilopolis', uf: 'RJ' },
			{ name: 'Niterói', name_order: 'Niteroi', uf: 'RJ' },
			{ name: 'Nova Friburgo', name_order: 'Nova Friburgo', uf: 'RJ' },
			{ name: 'Nova Iguaçu', name_order: 'Nova Iguacu', uf: 'RJ' },
			{ name: 'Paracambi', name_order: 'Paracambi', uf: 'RJ' },
			{ name: 'Paraíba do Sul', name_order: 'Paraiba do Sul', uf: 'RJ' },
			{ name: 'Parati', name_order: 'Parati', uf: 'RJ' },
			{ name: 'Paty do Alferes', name_order: 'Paty do Alferes', uf: 'RJ' },
			{ name: 'Petrópolis', name_order: 'Petropolis', uf: 'RJ' },
			{ name: 'Pinheiral', name_order: 'Pinheiral', uf: 'RJ' },
			{ name: 'Piraí', name_order: 'Pirai', uf: 'RJ' },
			{ name: 'Porciúncula', name_order: 'Porciuncula', uf: 'RJ' },
			{ name: 'Porto Real', name_order: 'Porto Real', uf: 'RJ' },
			{ name: 'Quatis', name_order: 'Quatis', uf: 'RJ' },
			{ name: 'Queimados', name_order: 'Queimados', uf: 'RJ' },
			{ name: 'Quissamã', name_order: 'Quissama', uf: 'RJ' },
			{ name: 'Resende', name_order: 'Resende', uf: 'RJ' },
			{ name: 'Rio Bonito', name_order: 'Rio Bonito', uf: 'RJ' },
			{ name: 'Rio Claro', name_order: 'Rio Claro', uf: 'RJ' },
			{ name: 'Rio Das Flores', name_order: 'Rio Das Flores', uf: 'RJ' },
			{ name: 'Rio Das Ostras', name_order: 'Rio Das Ostras', uf: 'RJ' },
			{ name: 'Rio de Janeiro', name_order: 'Rio de Janeiro', uf: 'RJ' },
			{ name: 'Santa Maria Madalena', name_order: 'Santa Maria Madalena', uf: 'RJ' },
			{ name: 'Santo Antônio de Pádua', name_order: 'Santo Antonio de Padua', uf: 'RJ' },
			{ name: 'São Francisco de Itabapoana', name_order: 'Sao Francisco de Itabapoana', uf: 'RJ' },
			{ name: 'São Fidélis', name_order: 'Sao Fidelis', uf: 'RJ' },
			{ name: 'São Gonçalo', name_order: 'Sao Goncalo', uf: 'RJ' },
			{ name: 'São João da Barra', name_order: 'Sao Joao da Barra', uf: 'RJ' },
			{ name: 'São João de Meriti', name_order: 'Sao Joao de Meriti', uf: 'RJ' },
			{ name: 'São José de Ubá', name_order: 'Sao Jose de Uba', uf: 'RJ' },
			{ name: 'São José do Vale do Rio Preto', name_order: 'Sao Jose do Vale do Rio Preto', uf: 'RJ' },
			{ name: 'São Pedro da Aldeia', name_order: 'Sao Pedro da Aldeia', uf: 'RJ' },
			{ name: 'São Sebastião do Alto', name_order: 'Sao Sebastiao do Alto', uf: 'RJ' },
			{ name: 'Sapucaia', name_order: 'Sapucaia', uf: 'RJ' },
			{ name: 'Saquarema', name_order: 'Saquarema', uf: 'RJ' },
			{ name: 'Seropédica', name_order: 'Seropedica', uf: 'RJ' },
			{ name: 'Silva Jardim', name_order: 'Silva Jardim', uf: 'RJ' },
			{ name: 'Sumidouro', name_order: 'Sumidouro', uf: 'RJ' },
			{ name: 'Tanguá', name_order: 'Tangua', uf: 'RJ' },
			{ name: 'Teresópolis', name_order: 'Teresopolis', uf: 'RJ' },
			{ name: 'Trajano de Morais', name_order: 'Trajano de Morais', uf: 'RJ' },
			{ name: 'Três Rios', name_order: 'Tres Rios', uf: 'RJ' },
			{ name: 'Valença', name_order: 'Valenca', uf: 'RJ' },
			{ name: 'Varre-sai', name_order: 'Varresai', uf: 'RJ' },
			{ name: 'Vassouras', name_order: 'Vassouras', uf: 'RJ' },
			{ name: 'Volta Redonda', name_order: 'Volta Redonda', uf: 'RJ' },
	]);
};
