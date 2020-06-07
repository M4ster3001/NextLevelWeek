import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
	return knex("cities").insert([
{ name: 'Paulo Lopes', name_order: 'Paulo Lopes', uf: 'SC' },
			{ name: 'Pedras Grandes', name_order: 'Pedras Grandes', uf: 'SC' },
			{ name: 'Penha', name_order: 'Penha', uf: 'SC' },
			{ name: 'Peritiba', name_order: 'Peritiba', uf: 'SC' },
			{ name: 'Pescaria Brava', name_order: 'Pescaria Brava', uf: 'SC' },
			{ name: 'Petrolândia', name_order: 'Petrolandia', uf: 'SC' },
			{ name: 'Piçarras', name_order: 'Picarras', uf: 'SC' },
			{ name: 'Pinhalzinho', name_order: 'Pinhalzinho', uf: 'SC' },
			{ name: 'Pinheiro Preto', name_order: 'Pinheiro Preto', uf: 'SC' },
			{ name: 'Piratuba', name_order: 'Piratuba', uf: 'SC' },
			{ name: 'Planalto Alegre', name_order: 'Planalto Alegre', uf: 'SC' },
			{ name: 'Pomerode', name_order: 'Pomerode', uf: 'SC' },
			{ name: 'Ponte Alta', name_order: 'Ponte Alta', uf: 'SC' },
			{ name: 'Ponte Alta do Norte', name_order: 'Ponte Alta do Norte', uf: 'SC' },
			{ name: 'Ponte Serrada', name_order: 'Ponte Serrada', uf: 'SC' },
			{ name: 'Porto Belo', name_order: 'Porto Belo', uf: 'SC' },
			{ name: 'Porto União', name_order: 'Porto Uniao', uf: 'SC' },
			{ name: 'Pouso Redondo', name_order: 'Pouso Redondo', uf: 'SC' },
			{ name: 'Praia Grande', name_order: 'Praia Grande', uf: 'SC' },
			{ name: 'Presidente Castelo Branco', name_order: 'Presidente Castelo Branco', uf: 'SC' },
			{ name: 'Presidente Getúlio', name_order: 'Presidente Getulio', uf: 'SC' },
			{ name: 'Presidente Nereu', name_order: 'Presidente Nereu', uf: 'SC' },
			{ name: 'Princesa', name_order: 'Princesa', uf: 'SC' },
			{ name: 'Quilombo', name_order: 'Quilombo', uf: 'SC' },
			{ name: 'Rancho Queimado', name_order: 'Rancho Queimado', uf: 'SC' },
			{ name: 'Rio Das Antas', name_order: 'Rio Das Antas', uf: 'SC' },
			{ name: 'Rio do Campo', name_order: 'Rio do Campo', uf: 'SC' },
			{ name: 'Rio do Oeste', name_order: 'Rio do Oeste', uf: 'SC' },
			{ name: 'Rio Dos Cedros', name_order: 'Rio Dos Cedros', uf: 'SC' },
			{ name: 'Rio do Sul', name_order: 'Rio do Sul', uf: 'SC' },
			{ name: 'Rio Fortuna', name_order: 'Rio Fortuna', uf: 'SC' },
			{ name: 'Rio Negrinho', name_order: 'Rio Negrinho', uf: 'SC' },
			{ name: 'Rio Rufino', name_order: 'Rio Rufino', uf: 'SC' },
			{ name: 'Riqueza', name_order: 'Riqueza', uf: 'SC' },
			{ name: 'Rodeio', name_order: 'Rodeio', uf: 'SC' },
			{ name: 'Romelândia', name_order: 'Romelandia', uf: 'SC' },
			{ name: 'Salete', name_order: 'Salete', uf: 'SC' },
			{ name: 'Saltinho', name_order: 'Saltinho', uf: 'SC' },
			{ name: 'Salto Veloso', name_order: 'Salto Veloso', uf: 'SC' },
			{ name: 'Sangão', name_order: 'Sangao', uf: 'SC' },
			{ name: 'Santa Cecília', name_order: 'Santa Cecilia', uf: 'SC' },
			{ name: 'Santa Helena', name_order: 'Santa Helena', uf: 'SC' },
			{ name: 'Santa Rosa de Lima', name_order: 'Santa Rosa de Lima', uf: 'SC' },
			{ name: 'Santa Rosa do Sul', name_order: 'Santa Rosa do Sul', uf: 'SC' },
			{ name: 'Santa Terezinha', name_order: 'Santa Terezinha', uf: 'SC' },
			{ name: 'Santa Terezinha do Progresso', name_order: 'Santa Terezinha do Progresso', uf: 'SC' },
			{ name: 'Santiago do Sul', name_order: 'Santiago do Sul', uf: 'SC' },
			{ name: 'Santo Amaro da Imperatriz', name_order: 'Santo Amaro da Imperatriz', uf: 'SC' },
			{ name: 'São Bernardino', name_order: 'Sao Bernardino', uf: 'SC' },
			{ name: 'São Bento do Sul', name_order: 'Sao Bento do Sul', uf: 'SC' },
			{ name: 'São Bonifácio', name_order: 'Sao Bonifacio', uf: 'SC' },
			{ name: 'São Carlos', name_order: 'Sao Carlos', uf: 'SC' },
			{ name: 'São Cristovão do Sul', name_order: 'Sao Cristovao do Sul', uf: 'SC' },
			{ name: 'São Domingos', name_order: 'Sao Domingos', uf: 'SC' },
			{ name: 'São Francisco do Sul', name_order: 'Sao Francisco do Sul', uf: 'SC' },
			{ name: 'São João do Oeste', name_order: 'Sao Joao do Oeste', uf: 'SC' },
			{ name: 'São João Batista', name_order: 'Sao Joao Batista', uf: 'SC' },
			{ name: 'São João do Itaperiú', name_order: 'Sao Joao do Itaperiu', uf: 'SC' },
			{ name: 'São João do Sul', name_order: 'Sao Joao do Sul', uf: 'SC' },
			{ name: 'São Joaquim', name_order: 'Sao Joaquim', uf: 'SC' },
			{ name: 'São José', name_order: 'Sao Jose', uf: 'SC' },
			{ name: 'São José do Cedro', name_order: 'Sao Jose do Cedro', uf: 'SC' },
			{ name: 'São José do Cerrito', name_order: 'Sao Jose do Cerrito', uf: 'SC' },
			{ name: 'São Lourenço do Oeste', name_order: 'Sao Lourenco do Oeste', uf: 'SC' },
			{ name: 'São Ludgero', name_order: 'Sao Ludgero', uf: 'SC' },
			{ name: 'São Martinho', name_order: 'Sao Martinho', uf: 'SC' },
			{ name: 'São Miguel da Boa Vista', name_order: 'Sao Miguel da Boa Vista', uf: 'SC' },
			{ name: 'São Miguel do Oeste', name_order: 'Sao Miguel do Oeste', uf: 'SC' },
			{ name: 'São Pedro de Alcântara', name_order: 'Sao Pedro de Alcantara', uf: 'SC' },
			{ name: 'Saudades', name_order: 'Saudades', uf: 'SC' },
			{ name: 'Schroeder', name_order: 'Schroeder', uf: 'SC' },
			{ name: 'Seara', name_order: 'Seara', uf: 'SC' },
			{ name: 'Serra Alta', name_order: 'Serra Alta', uf: 'SC' },
			{ name: 'Siderópolis', name_order: 'Sideropolis', uf: 'SC' },
			{ name: 'Sombrio', name_order: 'Sombrio', uf: 'SC' },
			{ name: 'Sul Brasil', name_order: 'Sul Brasil', uf: 'SC' },
			{ name: 'Taió', name_order: 'Taio', uf: 'SC' },
			{ name: 'Tangará', name_order: 'Tangara', uf: 'SC' },
			{ name: 'Tigrinhos', name_order: 'Tigrinhos', uf: 'SC' },
			{ name: 'Tijucas', name_order: 'Tijucas', uf: 'SC' },
			{ name: 'Timbé do Sul', name_order: 'Timbe do Sul', uf: 'SC' },
			{ name: 'Timbó', name_order: 'Timbo', uf: 'SC' },
			{ name: 'Timbó Grande', name_order: 'Timbo Grande', uf: 'SC' },
			{ name: 'Três Barras', name_order: 'Tres Barras', uf: 'SC' },
			{ name: 'Treviso', name_order: 'Treviso', uf: 'SC' },
			{ name: 'Treze de Maio', name_order: 'Treze de Maio', uf: 'SC' },
			{ name: 'Treze Tílias', name_order: 'Treze Tilias', uf: 'SC' },
			{ name: 'Trombudo Central', name_order: 'Trombudo Central', uf: 'SC' },
			{ name: 'Tubarão', name_order: 'Tubarao', uf: 'SC' },
			{ name: 'Tunápolis', name_order: 'Tunapolis', uf: 'SC' },
			{ name: 'Turvo', name_order: 'Turvo', uf: 'SC' },
			{ name: 'União do Oeste', name_order: 'Uniao do Oeste', uf: 'SC' },
			{ name: 'Urubici', name_order: 'Urubici', uf: 'SC' },
			{ name: 'Urupema', name_order: 'Urupema', uf: 'SC' },
			{ name: 'Urussanga', name_order: 'Urussanga', uf: 'SC' },
			{ name: 'Vargeão', name_order: 'Vargeao', uf: 'SC' },
			{ name: 'Vargem', name_order: 'Vargem', uf: 'SC' },
			{ name: 'Vargem Bonita', name_order: 'Vargem Bonita', uf: 'SC' },
			{ name: 'Vidal Ramos', name_order: 'Vidal Ramos', uf: 'SC' },
			{ name: 'Videira', name_order: 'Videira', uf: 'SC' },
			{ name: 'Vitor Meireles', name_order: 'Vitor Meireles', uf: 'SC' },
			{ name: 'Witmarsum', name_order: 'Witmarsum', uf: 'SC' },
			{ name: 'Xanxerê', name_order: 'Xanxere', uf: 'SC' },
			{ name: 'Xavantina', name_order: 'Xavantina', uf: 'SC' },
			{ name: 'Xaxim', name_order: 'Xaxim', uf: 'SC' },
			{ name: 'Zortéa', name_order: 'Zortea', uf: 'SC' },
			{ name: 'Balneário Rincão', name_order: 'Balneario Rincao', uf: 'SC' },
	]);
};