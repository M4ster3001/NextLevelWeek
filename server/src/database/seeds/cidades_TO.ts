import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
	return knex("cities").insert([
{ name: 'Abreulândia', name_order: 'Abreulandia', uf: 'TO' },
			{ name: 'Aguiarnópolis', name_order: 'Aguiarnopolis', uf: 'TO' },
			{ name: 'Aliança do Tocantins', name_order: 'Alianca do Tocantins', uf: 'TO' },
			{ name: 'Almas', name_order: 'Almas', uf: 'TO' },
			{ name: 'Alvorada', name_order: 'Alvorada', uf: 'TO' },
			{ name: 'Ananás', name_order: 'Ananas', uf: 'TO' },
			{ name: 'Angico', name_order: 'Angico', uf: 'TO' },
			{ name: 'Aparecida do Rio Negro', name_order: 'Aparecida do Rio Negro', uf: 'TO' },
			{ name: 'Aragominas', name_order: 'Aragominas', uf: 'TO' },
			{ name: 'Araguacema', name_order: 'Araguacema', uf: 'TO' },
			{ name: 'Araguaçu', name_order: 'Araguacu', uf: 'TO' },
			{ name: 'Araguaína', name_order: 'Araguaina', uf: 'TO' },
			{ name: 'Araguanã', name_order: 'Araguana', uf: 'TO' },
			{ name: 'Araguatins', name_order: 'Araguatins', uf: 'TO' },
			{ name: 'Arapoema', name_order: 'Arapoema', uf: 'TO' },
			{ name: 'Arraias', name_order: 'Arraias', uf: 'TO' },
			{ name: 'Augustinópolis', name_order: 'Augustinopolis', uf: 'TO' },
			{ name: 'Aurora do Tocantins', name_order: 'Aurora do Tocantins', uf: 'TO' },
			{ name: 'Axixá do Tocantins', name_order: 'Axixa do Tocantins', uf: 'TO' },
			{ name: 'Babaçulândia', name_order: 'Babaculandia', uf: 'TO' },
			{ name: 'Bandeirantes do Tocantins', name_order: 'Bandeirantes do Tocantins', uf: 'TO' },
			{ name: 'Barra do Ouro', name_order: 'Barra do Ouro', uf: 'TO' },
			{ name: 'Barrolândia', name_order: 'Barrolandia', uf: 'TO' },
			{ name: 'Bernardo Sayão', name_order: 'Bernardo Sayao', uf: 'TO' },
			{ name: 'Bom Jesus do Tocantins', name_order: 'Bom Jesus do Tocantins', uf: 'TO' },
			{ name: 'Brasilândia do Tocantins', name_order: 'Brasilandia do Tocantins', uf: 'TO' },
			{ name: 'Brejinho de Nazaré', name_order: 'Brejinho de Nazare', uf: 'TO' },
			{ name: 'Buriti do Tocantins', name_order: 'Buriti do Tocantins', uf: 'TO' },
			{ name: 'Cachoeirinha', name_order: 'Cachoeirinha', uf: 'TO' },
			{ name: 'Campos Lindos', name_order: 'Campos Lindos', uf: 'TO' },
			{ name: 'Cariri do Tocantins', name_order: 'Cariri do Tocantins', uf: 'TO' },
			{ name: 'Carmolândia', name_order: 'Carmolandia', uf: 'TO' },
			{ name: 'Carrasco Bonito', name_order: 'Carrasco Bonito', uf: 'TO' },
			{ name: 'Caseara', name_order: 'Caseara', uf: 'TO' },
			{ name: 'Centenário', name_order: 'Centenario', uf: 'TO' },
			{ name: 'Chapada de Areia', name_order: 'Chapada de Areia', uf: 'TO' },
			{ name: 'Chapada da Natividade', name_order: 'Chapada da Natividade', uf: 'TO' },
			{ name: 'Colinas do Tocantins', name_order: 'Colinas do Tocantins', uf: 'TO' },
			{ name: 'Combinado', name_order: 'Combinado', uf: 'TO' },
			{ name: 'Conceição do Tocantins', name_order: 'Conceicao do Tocantins', uf: 'TO' },
			{ name: 'Couto de Magalhães', name_order: 'Couto de Magalhaes', uf: 'TO' },
			{ name: 'Cristalândia', name_order: 'Cristalandia', uf: 'TO' },
			{ name: 'Crixás do Tocantins', name_order: 'Crixas do Tocantins', uf: 'TO' },
			{ name: 'Darcinópolis', name_order: 'Darcinopolis', uf: 'TO' },
			{ name: 'Dianópolis', name_order: 'Dianopolis', uf: 'TO' },
			{ name: 'Divinópolis do Tocantins', name_order: 'Divinopolis do Tocantins', uf: 'TO' },
			{ name: 'Dois Irmãos do Tocantins', name_order: 'Dois Irmaos do Tocantins', uf: 'TO' },
			{ name: 'Dueré', name_order: 'Duere', uf: 'TO' },
			{ name: 'Esperantina', name_order: 'Esperantina', uf: 'TO' },
			{ name: 'Fátima', name_order: 'Fatima', uf: 'TO' },
			{ name: 'Figueirópolis', name_order: 'Figueiropolis', uf: 'TO' },
			{ name: 'Filadélfia', name_order: 'Filadelfia', uf: 'TO' },
			{ name: 'Formoso do Araguaia', name_order: 'Formoso do Araguaia', uf: 'TO' },
			{ name: 'Fortaleza do Tabocão', name_order: 'Fortaleza do Tabocao', uf: 'TO' },
			{ name: 'Goianorte', name_order: 'Goianorte', uf: 'TO' },
			{ name: 'Goiatins', name_order: 'Goiatins', uf: 'TO' },
			{ name: 'Guaraí', name_order: 'Guarai', uf: 'TO' },
			{ name: 'Gurupi', name_order: 'Gurupi', uf: 'TO' },
			{ name: 'Ipueiras', name_order: 'Ipueiras', uf: 'TO' },
			{ name: 'Itacajá', name_order: 'Itacaja', uf: 'TO' },
			{ name: 'Itaguatins', name_order: 'Itaguatins', uf: 'TO' },
			{ name: 'Itapiratins', name_order: 'Itapiratins', uf: 'TO' },
			{ name: 'Itaporã do Tocantins', name_order: 'Itapora do Tocantins', uf: 'TO' },
			{ name: 'Jaú do Tocantins', name_order: 'Jau do Tocantins', uf: 'TO' },
			{ name: 'Juarina', name_order: 'Juarina', uf: 'TO' },
			{ name: 'Lagoa da Confusão', name_order: 'Lagoa da Confusao', uf: 'TO' },
			{ name: 'Lagoa do Tocantins', name_order: 'Lagoa do Tocantins', uf: 'TO' },
			{ name: 'Lajeado', name_order: 'Lajeado', uf: 'TO' },
			{ name: 'Lavandeira', name_order: 'Lavandeira', uf: 'TO' },
			{ name: 'Lizarda', name_order: 'Lizarda', uf: 'TO' },
			{ name: 'Luzinópolis', name_order: 'Luzinopolis', uf: 'TO' },
			{ name: 'Marianópolis do Tocantins', name_order: 'Marianopolis do Tocantins', uf: 'TO' },
			{ name: 'Mateiros', name_order: 'Mateiros', uf: 'TO' },
			{ name: 'Maurilândia do Tocantins', name_order: 'Maurilandia do Tocantins', uf: 'TO' },
			{ name: 'Miracema do Tocantins', name_order: 'Miracema do Tocantins', uf: 'TO' },
			{ name: 'Miranorte', name_order: 'Miranorte', uf: 'TO' },
			{ name: 'Monte do Carmo', name_order: 'Monte do Carmo', uf: 'TO' },
			{ name: 'Monte Santo do Tocantins', name_order: 'Monte Santo do Tocantins', uf: 'TO' },
			{ name: 'Palmeiras do Tocantins', name_order: 'Palmeiras do Tocantins', uf: 'TO' },
			{ name: 'Muricilândia', name_order: 'Muricilandia', uf: 'TO' },
			{ name: 'Natividade', name_order: 'Natividade', uf: 'TO' },
			{ name: 'Nazaré', name_order: 'Nazare', uf: 'TO' },
			{ name: 'Nova Olinda', name_order: 'Nova Olinda', uf: 'TO' },
			{ name: 'Nova Rosalândia', name_order: 'Nova Rosalandia', uf: 'TO' },
			{ name: 'Novo Acordo', name_order: 'Novo Acordo', uf: 'TO' },
			{ name: 'Novo Alegre', name_order: 'Novo Alegre', uf: 'TO' },
			{ name: 'Novo Jardim', name_order: 'Novo Jardim', uf: 'TO' },
			{ name: 'Oliveira de Fátima', name_order: 'Oliveira de Fatima', uf: 'TO' },
			{ name: 'Palmeirante', name_order: 'Palmeirante', uf: 'TO' },
			{ name: 'Palmeirópolis', name_order: 'Palmeiropolis', uf: 'TO' },
			{ name: 'Paraíso do Tocantins', name_order: 'Paraiso do Tocantins', uf: 'TO' },
			{ name: 'Paranã', name_order: 'Parana', uf: 'TO' },
			{ name: 'Pau D´arco', name_order: 'Pau Darco', uf: 'TO' },
			{ name: 'Pedro Afonso', name_order: 'Pedro Afonso', uf: 'TO' },
			{ name: 'Peixe', name_order: 'Peixe', uf: 'TO' },
			{ name: 'Pequizeiro', name_order: 'Pequizeiro', uf: 'TO' },
			{ name: 'Colméia', name_order: 'Colmeia', uf: 'TO' },
			{ name: 'Pindorama do Tocantins', name_order: 'Pindorama do Tocantins', uf: 'TO' },
			{ name: 'Piraquê', name_order: 'Piraque', uf: 'TO' },
			{ name: 'Pium', name_order: 'Pium', uf: 'TO' },
			{ name: 'Ponte Alta do Bom Jesus', name_order: 'Ponte Alta do Bom Jesus', uf: 'TO' },
			{ name: 'Ponte Alta do Tocantins', name_order: 'Ponte Alta do Tocantins', uf: 'TO' },
			{ name: 'Porto Alegre do Tocantins', name_order: 'Porto Alegre do Tocantins', uf: 'TO' },
			{ name: 'Porto Nacional', name_order: 'Porto Nacional', uf: 'TO' },
			{ name: 'Praia Norte', name_order: 'Praia Norte', uf: 'TO' },
			{ name: 'Presidente Kennedy', name_order: 'Presidente Kennedy', uf: 'TO' },
			{ name: 'Pugmil', name_order: 'Pugmil', uf: 'TO' },
			{ name: 'Recursolândia', name_order: 'Recursolandia', uf: 'TO' },
			{ name: 'Riachinho', name_order: 'Riachinho', uf: 'TO' },
			{ name: 'Rio da Conceição', name_order: 'Rio da Conceicao', uf: 'TO' },
			{ name: 'Rio Dos Bois', name_order: 'Rio Dos Bois', uf: 'TO' },
			{ name: 'Rio Sono', name_order: 'Rio Sono', uf: 'TO' },
			{ name: 'Sampaio', name_order: 'Sampaio', uf: 'TO' },
			{ name: 'Sandolândia', name_order: 'Sandolandia', uf: 'TO' },
			{ name: 'Santa fé do Araguaia', name_order: 'Santa fe do Araguaia', uf: 'TO' },
			{ name: 'Santa Maria do Tocantins', name_order: 'Santa Maria do Tocantins', uf: 'TO' },
			{ name: 'Santa Rita do Tocantins', name_order: 'Santa Rita do Tocantins', uf: 'TO' },
			{ name: 'Santa Rosa do Tocantins', name_order: 'Santa Rosa do Tocantins', uf: 'TO' },
			{ name: 'Santa Tereza do Tocantins', name_order: 'Santa Tereza do Tocantins', uf: 'TO' },
			{ name: 'Santa Terezinha do Tocantins', name_order: 'Santa Terezinha do Tocantins', uf: 'TO' },
			{ name: 'São Bento do Tocantins', name_order: 'Sao Bento do Tocantins', uf: 'TO' },
			{ name: 'São Félix do Tocantins', name_order: 'Sao Felix do Tocantins', uf: 'TO' },
			{ name: 'São Miguel do Tocantins', name_order: 'Sao Miguel do Tocantins', uf: 'TO' },
			{ name: 'São Salvador do Tocantins', name_order: 'Sao Salvador do Tocantins', uf: 'TO' },
			{ name: 'São Sebastião do Tocantins', name_order: 'Sao Sebastiao do Tocantins', uf: 'TO' },
			{ name: 'São Valério da Natividade', name_order: 'Sao Valerio da Natividade', uf: 'TO' },
			{ name: 'Silvanópolis', name_order: 'Silvanopolis', uf: 'TO' },
			{ name: 'Sítio Novo do Tocantins', name_order: 'Sitio Novo do Tocantins', uf: 'TO' },
			{ name: 'Sucupira', name_order: 'Sucupira', uf: 'TO' },
			{ name: 'Taguatinga', name_order: 'Taguatinga', uf: 'TO' },
			{ name: 'Taipas do Tocantins', name_order: 'Taipas do Tocantins', uf: 'TO' },
			{ name: 'Talismã', name_order: 'Talisma', uf: 'TO' },
			{ name: 'Palmas', name_order: 'Palmas', uf: 'TO' },
			{ name: 'Tocantínia', name_order: 'Tocantinia', uf: 'TO' },
			{ name: 'Tocantinópolis', name_order: 'Tocantinopolis', uf: 'TO' },
			{ name: 'Tupirama', name_order: 'Tupirama', uf: 'TO' },
			{ name: 'Tupiratins', name_order: 'Tupiratins', uf: 'TO' },
			{ name: 'Wanderlândia', name_order: 'Wanderlandia', uf: 'TO' },
			{ name: 'Xambioá', name_order: 'Xambioa', uf: 'TO' },
	]);
};
