import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
	return knex("cities").insert([
{ name: 'Pacatuba', name_order: 'Pacatuba', uf: 'SE' },
			{ name: 'Pedra Mole', name_order: 'Pedra Mole', uf: 'SE' },
			{ name: 'Pedrinhas', name_order: 'Pedrinhas', uf: 'SE' },
			{ name: 'Pinhão', name_order: 'Pinhao', uf: 'SE' },
			{ name: 'Pirambu', name_order: 'Pirambu', uf: 'SE' },
			{ name: 'Poço Redondo', name_order: 'Poco Redondo', uf: 'SE' },
			{ name: 'Poço Verde', name_order: 'Poco Verde', uf: 'SE' },
			{ name: 'Porto da Folha', name_order: 'Porto da Folha', uf: 'SE' },
			{ name: 'Propriá', name_order: 'Propria', uf: 'SE' },
			{ name: 'Riachão do Dantas', name_order: 'Riachao do Dantas', uf: 'SE' },
			{ name: 'Riachuelo', name_order: 'Riachuelo', uf: 'SE' },
			{ name: 'Ribeirópolis', name_order: 'Ribeiropolis', uf: 'SE' },
			{ name: 'Rosário do Catete', name_order: 'Rosario do Catete', uf: 'SE' },
			{ name: 'Salgado', name_order: 'Salgado', uf: 'SE' },
			{ name: 'Santa Luzia do Itanhy', name_order: 'Santa Luzia do Itanhy', uf: 'SE' },
			{ name: 'Santana do São Francisco', name_order: 'Santana do Sao Francisco', uf: 'SE' },
			{ name: 'Santa Rosa de Lima', name_order: 'Santa Rosa de Lima', uf: 'SE' },
			{ name: 'Santo Amaro Das Brotas', name_order: 'Santo Amaro Das Brotas', uf: 'SE' },
			{ name: 'São Cristóvão', name_order: 'Sao Cristovao', uf: 'SE' },
			{ name: 'São Domingos', name_order: 'Sao Domingos', uf: 'SE' },
			{ name: 'São Francisco', name_order: 'Sao Francisco', uf: 'SE' },
			{ name: 'São Miguel do Aleixo', name_order: 'Sao Miguel do Aleixo', uf: 'SE' },
			{ name: 'Simão Dias', name_order: 'Simao Dias', uf: 'SE' },
			{ name: 'Siriri', name_order: 'Siriri', uf: 'SE' },
			{ name: 'Telha', name_order: 'Telha', uf: 'SE' },
			{ name: 'Tobias Barreto', name_order: 'Tobias Barreto', uf: 'SE' },
			{ name: 'Tomar do Geru', name_order: 'Tomar do Geru', uf: 'SE' },
			{ name: 'Umbaúba', name_order: 'Umbauba', uf: 'SE' },
	]);
};
