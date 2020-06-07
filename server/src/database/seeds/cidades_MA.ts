import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
	return knex("cities").insert([
{ name: 'Presidente Dutra', name_order: 'Presidente Dutra', uf: 'MA' },
			{ name: 'Presidente Juscelino', name_order: 'Presidente Juscelino', uf: 'MA' },
			{ name: 'Presidente Médici', name_order: 'Presidente Medici', uf: 'MA' },
			{ name: 'Presidente Sarney', name_order: 'Presidente Sarney', uf: 'MA' },
			{ name: 'Presidente Vargas', name_order: 'Presidente Vargas', uf: 'MA' },
			{ name: 'Primeira Cruz', name_order: 'Primeira Cruz', uf: 'MA' },
			{ name: 'Raposa', name_order: 'Raposa', uf: 'MA' },
			{ name: 'Riachão', name_order: 'Riachao', uf: 'MA' },
			{ name: 'Ribamar Fiquene', name_order: 'Ribamar Fiquene', uf: 'MA' },
			{ name: 'Rosário', name_order: 'Rosario', uf: 'MA' },
			{ name: 'Sambaíba', name_order: 'Sambaiba', uf: 'MA' },
			{ name: 'Santa Filomena do Maranhão', name_order: 'Santa Filomena do Maranhao', uf: 'MA' },
			{ name: 'Santa Helena', name_order: 'Santa Helena', uf: 'MA' },
			{ name: 'Santa Inês', name_order: 'Santa Ines', uf: 'MA' },
			{ name: 'Santa Luzia', name_order: 'Santa Luzia', uf: 'MA' },
			{ name: 'Santa Luzia do Paruá', name_order: 'Santa Luzia do Parua', uf: 'MA' },
			{ name: 'Santa Quitéria do Maranhão', name_order: 'Santa Quiteria do Maranhao', uf: 'MA' },
			{ name: 'Santa Rita', name_order: 'Santa Rita', uf: 'MA' },
			{ name: 'Santana do Maranhão', name_order: 'Santana do Maranhao', uf: 'MA' },
			{ name: 'Santo Amaro do Maranhão', name_order: 'Santo Amaro do Maranhao', uf: 'MA' },
			{ name: 'Santo Antônio Dos Lopes', name_order: 'Santo Antonio Dos Lopes', uf: 'MA' },
			{ name: 'São Benedito do Rio Preto', name_order: 'Sao Benedito do Rio Preto', uf: 'MA' },
			{ name: 'São Bento', name_order: 'Sao Bento', uf: 'MA' },
			{ name: 'São Bernardo', name_order: 'Sao Bernardo', uf: 'MA' },
			{ name: 'São Domingos do Azeitão', name_order: 'Sao Domingos do Azeitao', uf: 'MA' },
			{ name: 'São Domingos do Maranhão', name_order: 'Sao Domingos do Maranhao', uf: 'MA' },
			{ name: 'São Félix de Balsas', name_order: 'Sao Felix de Balsas', uf: 'MA' },
			{ name: 'São Francisco do Brejão', name_order: 'Sao Francisco do Brejao', uf: 'MA' },
			{ name: 'São Francisco do Maranhão', name_order: 'Sao Francisco do Maranhao', uf: 'MA' },
			{ name: 'São João Batista', name_order: 'Sao Joao Batista', uf: 'MA' },
			{ name: 'São João do Carú', name_order: 'Sao Joao do Caru', uf: 'MA' },
			{ name: 'São João do Paraíso', name_order: 'Sao Joao do Paraiso', uf: 'MA' },
			{ name: 'São João do Soter', name_order: 'Sao Joao do Soter', uf: 'MA' },
			{ name: 'São João Dos Patos', name_order: 'Sao Joao Dos Patos', uf: 'MA' },
			{ name: 'São José de Ribamar', name_order: 'Sao Jose de Ribamar', uf: 'MA' },
			{ name: 'São José Dos Basílios', name_order: 'Sao Jose Dos Basilios', uf: 'MA' },
			{ name: 'São Luís', name_order: 'Sao Luis', uf: 'MA' },
			{ name: 'São Luís Gonzaga do Maranhão', name_order: 'Sao Luis Gonzaga do Maranhao', uf: 'MA' },
			{ name: 'São Mateus do Maranhão', name_order: 'Sao Mateus do Maranhao', uf: 'MA' },
			{ name: 'São Pedro da Água Branca', name_order: 'Sao Pedro da Agua Branca', uf: 'MA' },
			{ name: 'São Pedro Dos Crentes', name_order: 'Sao Pedro Dos Crentes', uf: 'MA' },
			{ name: 'São Raimundo Das Mangabeiras', name_order: 'Sao Raimundo Das Mangabeiras', uf: 'MA' },
			{ name: 'São Raimundo do Doca Bezerra', name_order: 'Sao Raimundo do Doca Bezerra', uf: 'MA' },
			{ name: 'São Roberto', name_order: 'Sao Roberto', uf: 'MA' },
			{ name: 'São Vicente Ferrer', name_order: 'Sao Vicente Ferrer', uf: 'MA' },
			{ name: 'Satubinha', name_order: 'Satubinha', uf: 'MA' },
			{ name: 'Senador Alexandre Costa', name_order: 'Senador Alexandre Costa', uf: 'MA' },
			{ name: 'Senador la Rocque', name_order: 'Senador la Rocque', uf: 'MA' },
			{ name: 'Serrano do Maranhão', name_order: 'Serrano do Maranhao', uf: 'MA' },
			{ name: 'Sítio Novo', name_order: 'Sitio Novo', uf: 'MA' },
			{ name: 'Sucupira do Norte', name_order: 'Sucupira do Norte', uf: 'MA' },
			{ name: 'Sucupira do Riachão', name_order: 'Sucupira do Riachao', uf: 'MA' },
			{ name: 'Tasso Fragoso', name_order: 'Tasso Fragoso', uf: 'MA' },
			{ name: 'Timbiras', name_order: 'Timbiras', uf: 'MA' },
			{ name: 'Timon', name_order: 'Timon', uf: 'MA' },
			{ name: 'Trizidela do Vale', name_order: 'Trizidela do Vale', uf: 'MA' },
			{ name: 'Tufilândia', name_order: 'Tufilandia', uf: 'MA' },
			{ name: 'Tuntum', name_order: 'Tuntum', uf: 'MA' },
			{ name: 'Turiaçu', name_order: 'Turiacu', uf: 'MA' },
			{ name: 'Turilândia', name_order: 'Turilandia', uf: 'MA' },
			{ name: 'Tutóia', name_order: 'Tutoia', uf: 'MA' },
			{ name: 'Urbano Santos', name_order: 'Urbano Santos', uf: 'MA' },
			{ name: 'Vargem Grande', name_order: 'Vargem Grande', uf: 'MA' },
			{ name: 'Viana', name_order: 'Viana', uf: 'MA' },
			{ name: 'Vila Nova Dos Martírios', name_order: 'Vila Nova Dos Martirios', uf: 'MA' },
			{ name: 'Vitória do Mearim', name_order: 'Vitoria do Mearim', uf: 'MA' },
			{ name: 'Vitorino Freire', name_order: 'Vitorino Freire', uf: 'MA' },
			{ name: 'zé Doca', name_order: 'ze Doca', uf: 'MA' },
	]);
};
