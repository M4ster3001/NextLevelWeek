import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
	return knex("cities").insert([
{ name: 'Abdon Batista', name_order: 'Abdon Batista', uf: 'SC' },
			{ name: 'Abelardo Luz', name_order: 'Abelardo Luz', uf: 'SC' },
			{ name: 'Agrolândia', name_order: 'Agrolandia', uf: 'SC' },
			{ name: 'Agronômica', name_order: 'Agronomica', uf: 'SC' },
			{ name: 'Água Doce', name_order: 'Agua Doce', uf: 'SC' },
			{ name: 'Águas de Chapecó', name_order: 'Aguas de Chapeco', uf: 'SC' },
			{ name: 'Águas Frias', name_order: 'Aguas Frias', uf: 'SC' },
			{ name: 'Águas Mornas', name_order: 'Aguas Mornas', uf: 'SC' },
			{ name: 'Alfredo Wagner', name_order: 'Alfredo Wagner', uf: 'SC' },
			{ name: 'Alto Bela Vista', name_order: 'Alto Bela Vista', uf: 'SC' },
			{ name: 'Anchieta', name_order: 'Anchieta', uf: 'SC' },
			{ name: 'Angelina', name_order: 'Angelina', uf: 'SC' },
			{ name: 'Anita Garibaldi', name_order: 'Anita Garibaldi', uf: 'SC' },
			{ name: 'Anitápolis', name_order: 'Anitapolis', uf: 'SC' },
			{ name: 'Antônio Carlos', name_order: 'Antonio Carlos', uf: 'SC' },
			{ name: 'Apiúna', name_order: 'Apiuna', uf: 'SC' },
			{ name: 'Arabutã', name_order: 'Arabuta', uf: 'SC' },
			{ name: 'Araquari', name_order: 'Araquari', uf: 'SC' },
			{ name: 'Araranguá', name_order: 'Ararangua', uf: 'SC' },
			{ name: 'Armazém', name_order: 'Armazem', uf: 'SC' },
			{ name: 'Arroio Trinta', name_order: 'Arroio Trinta', uf: 'SC' },
			{ name: 'Arvoredo', name_order: 'Arvoredo', uf: 'SC' },
			{ name: 'Ascurra', name_order: 'Ascurra', uf: 'SC' },
			{ name: 'Atalanta', name_order: 'Atalanta', uf: 'SC' },
			{ name: 'Aurora', name_order: 'Aurora', uf: 'SC' },
			{ name: 'Balneário Arroio do Silva', name_order: 'Balneario Arroio do Silva', uf: 'SC' },
			{ name: 'Balneário Camboriú', name_order: 'Balneario Camboriu', uf: 'SC' },
			{ name: 'Balneário Barra do Sul', name_order: 'Balneario Barra do Sul', uf: 'SC' },
			{ name: 'Balneário Gaivota', name_order: 'Balneario Gaivota', uf: 'SC' },
			{ name: 'Bandeirante', name_order: 'Bandeirante', uf: 'SC' },
			{ name: 'Barra Bonita', name_order: 'Barra Bonita', uf: 'SC' },
			{ name: 'Barra Velha', name_order: 'Barra Velha', uf: 'SC' },
			{ name: 'Bela Vista do Toldo', name_order: 'Bela Vista do Toldo', uf: 'SC' },
			{ name: 'Belmonte', name_order: 'Belmonte', uf: 'SC' },
			{ name: 'Benedito Novo', name_order: 'Benedito Novo', uf: 'SC' },
			{ name: 'Biguaçu', name_order: 'Biguacu', uf: 'SC' },
			{ name: 'Blumenau', name_order: 'Blumenau', uf: 'SC' },
			{ name: 'Bocaina do Sul', name_order: 'Bocaina do Sul', uf: 'SC' },
			{ name: 'Bombinhas', name_order: 'Bombinhas', uf: 'SC' },
			{ name: 'Bom Jardim da Serra', name_order: 'Bom Jardim da Serra', uf: 'SC' },
			{ name: 'Bom Jesus', name_order: 'Bom Jesus', uf: 'SC' },
			{ name: 'Bom Jesus do Oeste', name_order: 'Bom Jesus do Oeste', uf: 'SC' },
			{ name: 'Bom Retiro', name_order: 'Bom Retiro', uf: 'SC' },
			{ name: 'Botuverá', name_order: 'Botuvera', uf: 'SC' },
			{ name: 'Braço do Norte', name_order: 'Braco do Norte', uf: 'SC' },
			{ name: 'Braço do Trombudo', name_order: 'Braco do Trombudo', uf: 'SC' },
			{ name: 'Brunópolis', name_order: 'Brunopolis', uf: 'SC' },
			{ name: 'Brusque', name_order: 'Brusque', uf: 'SC' },
			{ name: 'Caçador', name_order: 'Cacador', uf: 'SC' },
			{ name: 'Caibi', name_order: 'Caibi', uf: 'SC' },
			{ name: 'Calmon', name_order: 'Calmon', uf: 'SC' },
			{ name: 'Camboriú', name_order: 'Camboriu', uf: 'SC' },
			{ name: 'Capão Alto', name_order: 'Capao Alto', uf: 'SC' },
			{ name: 'Campo Alegre', name_order: 'Campo Alegre', uf: 'SC' },
			{ name: 'Campo Belo do Sul', name_order: 'Campo Belo do Sul', uf: 'SC' },
			{ name: 'Campo Erê', name_order: 'Campo Ere', uf: 'SC' },
			{ name: 'Campos Novos', name_order: 'Campos Novos', uf: 'SC' },
			{ name: 'Canelinha', name_order: 'Canelinha', uf: 'SC' },
			{ name: 'Canoinhas', name_order: 'Canoinhas', uf: 'SC' },
			{ name: 'Capinzal', name_order: 'Capinzal', uf: 'SC' },
			{ name: 'Capivari de Baixo', name_order: 'Capivari de Baixo', uf: 'SC' },
			{ name: 'Catanduvas', name_order: 'Catanduvas', uf: 'SC' },
			{ name: 'Caxambu do Sul', name_order: 'Caxambu do Sul', uf: 'SC' },
			{ name: 'Celso Ramos', name_order: 'Celso Ramos', uf: 'SC' },
			{ name: 'Cerro Negro', name_order: 'Cerro Negro', uf: 'SC' },
			{ name: 'Chapadão do Lageado', name_order: 'Chapadao do Lageado', uf: 'SC' },
			{ name: 'Chapecó', name_order: 'Chapeco', uf: 'SC' },
			{ name: 'Cocal do Sul', name_order: 'Cocal do Sul', uf: 'SC' },
			{ name: 'Concórdia', name_order: 'Concordia', uf: 'SC' },
			{ name: 'Cordilheira Alta', name_order: 'Cordilheira Alta', uf: 'SC' },
			{ name: 'Coronel Freitas', name_order: 'Coronel Freitas', uf: 'SC' },
			{ name: 'Coronel Martins', name_order: 'Coronel Martins', uf: 'SC' },
			{ name: 'Corupá', name_order: 'Corupa', uf: 'SC' },
			{ name: 'Correia Pinto', name_order: 'Correia Pinto', uf: 'SC' },
			{ name: 'Criciúma', name_order: 'Criciuma', uf: 'SC' },
			{ name: 'Cunha Porã', name_order: 'Cunha Pora', uf: 'SC' },
			{ name: 'Cunhataí', name_order: 'Cunhatai', uf: 'SC' },
			{ name: 'Curitibanos', name_order: 'Curitibanos', uf: 'SC' },
			{ name: 'Descanso', name_order: 'Descanso', uf: 'SC' },
			{ name: 'Dionísio Cerqueira', name_order: 'Dionisio Cerqueira', uf: 'SC' },
			{ name: 'Dona Emma', name_order: 'Dona Emma', uf: 'SC' },
			{ name: 'Doutor Pedrinho', name_order: 'Doutor Pedrinho', uf: 'SC' },
			{ name: 'Entre Rios', name_order: 'Entre Rios', uf: 'SC' },
			{ name: 'Ermo', name_order: 'Ermo', uf: 'SC' },
			{ name: 'Erval Velho', name_order: 'Erval Velho', uf: 'SC' },
			{ name: 'Faxinal Dos Guedes', name_order: 'Faxinal Dos Guedes', uf: 'SC' },
			{ name: 'Flor do Sertão', name_order: 'Flor do Sertao', uf: 'SC' },
			{ name: 'Florianópolis', name_order: 'Florianopolis', uf: 'SC' },
			{ name: 'Formosa do Sul', name_order: 'Formosa do Sul', uf: 'SC' },
			{ name: 'Forquilhinha', name_order: 'Forquilhinha', uf: 'SC' },
			{ name: 'Fraiburgo', name_order: 'Fraiburgo', uf: 'SC' },
			{ name: 'Frei Rogério', name_order: 'Frei Rogerio', uf: 'SC' },
			{ name: 'Galvão', name_order: 'Galvao', uf: 'SC' },
			{ name: 'Garopaba', name_order: 'Garopaba', uf: 'SC' },
			{ name: 'Garuva', name_order: 'Garuva', uf: 'SC' },
			{ name: 'Gaspar', name_order: 'Gaspar', uf: 'SC' },
			{ name: 'Governador Celso Ramos', name_order: 'Governador Celso Ramos', uf: 'SC' },
			{ name: 'Grão Pará', name_order: 'Grao Para', uf: 'SC' },
			{ name: 'Gravatal', name_order: 'Gravatal', uf: 'SC' },
			{ name: 'Guabiruba', name_order: 'Guabiruba', uf: 'SC' },
			{ name: 'Guaraciaba', name_order: 'Guaraciaba', uf: 'SC' },
			{ name: 'Guaramirim', name_order: 'Guaramirim', uf: 'SC' },
			{ name: 'Guarujá do Sul', name_order: 'Guaruja do Sul', uf: 'SC' },
			{ name: 'Guatambú', name_order: 'Guatambu', uf: 'SC' },
			{ name: 'Herval D´oeste', name_order: 'Herval Doeste', uf: 'SC' },
			{ name: 'Ibiam', name_order: 'Ibiam', uf: 'SC' },
			{ name: 'Ibicaré', name_order: 'Ibicare', uf: 'SC' },
			{ name: 'Ibirama', name_order: 'Ibirama', uf: 'SC' },
			{ name: 'Içara', name_order: 'Icara', uf: 'SC' },
			{ name: 'Ilhota', name_order: 'Ilhota', uf: 'SC' },
			{ name: 'Imaruí', name_order: 'Imarui', uf: 'SC' },
			{ name: 'Imbituba', name_order: 'Imbituba', uf: 'SC' },
			{ name: 'Imbuia', name_order: 'Imbuia', uf: 'SC' },
			{ name: 'Indaial', name_order: 'Indaial', uf: 'SC' },
			{ name: 'Iomerê', name_order: 'Iomere', uf: 'SC' },
			{ name: 'Ipira', name_order: 'Ipira', uf: 'SC' },
			{ name: 'Iporã do Oeste', name_order: 'Ipora do Oeste', uf: 'SC' },
			{ name: 'Ipuaçu', name_order: 'Ipuacu', uf: 'SC' },
			{ name: 'Ipumirim', name_order: 'Ipumirim', uf: 'SC' },
			{ name: 'Iraceminha', name_order: 'Iraceminha', uf: 'SC' },
			{ name: 'Irani', name_order: 'Irani', uf: 'SC' },
			{ name: 'Irati', name_order: 'Irati', uf: 'SC' },
			{ name: 'Irineópolis', name_order: 'Irineopolis', uf: 'SC' },
			{ name: 'Itá', name_order: 'Ita', uf: 'SC' },
			{ name: 'Itaiópolis', name_order: 'Itaiopolis', uf: 'SC' },
			{ name: 'Itajaí', name_order: 'Itajai', uf: 'SC' },
			{ name: 'Itapema', name_order: 'Itapema', uf: 'SC' },
			{ name: 'Itapiranga', name_order: 'Itapiranga', uf: 'SC' },
			{ name: 'Itapoá', name_order: 'Itapoa', uf: 'SC' },
			{ name: 'Ituporanga', name_order: 'Ituporanga', uf: 'SC' },
			{ name: 'Jaborá', name_order: 'Jabora', uf: 'SC' },
			{ name: 'Jacinto Machado', name_order: 'Jacinto Machado', uf: 'SC' },
			{ name: 'Jaguaruna', name_order: 'Jaguaruna', uf: 'SC' },
			{ name: 'Jaraguá do Sul', name_order: 'Jaragua do Sul', uf: 'SC' },
			{ name: 'Jardinópolis', name_order: 'Jardinopolis', uf: 'SC' },
			{ name: 'Joaçaba', name_order: 'Joacaba', uf: 'SC' },
			{ name: 'Joinville', name_order: 'Joinville', uf: 'SC' },
			{ name: 'José Boiteux', name_order: 'Jose Boiteux', uf: 'SC' },
			{ name: 'Jupiá', name_order: 'Jupia', uf: 'SC' },
			{ name: 'Lacerdópolis', name_order: 'Lacerdopolis', uf: 'SC' },
			{ name: 'Lages', name_order: 'Lages', uf: 'SC' },
			{ name: 'Laguna', name_order: 'Laguna', uf: 'SC' },
			{ name: 'Lajeado Grande', name_order: 'Lajeado Grande', uf: 'SC' },
			{ name: 'Laurentino', name_order: 'Laurentino', uf: 'SC' },
			{ name: 'Lauro Muller', name_order: 'Lauro Muller', uf: 'SC' },
			{ name: 'Lebon Régis', name_order: 'Lebon Regis', uf: 'SC' },
			{ name: 'Leoberto Leal', name_order: 'Leoberto Leal', uf: 'SC' },
			{ name: 'Lindóia do Sul', name_order: 'Lindoia do Sul', uf: 'SC' },
			{ name: 'Lontras', name_order: 'Lontras', uf: 'SC' },
			{ name: 'Luiz Alves', name_order: 'Luiz Alves', uf: 'SC' },
			{ name: 'Luzerna', name_order: 'Luzerna', uf: 'SC' },
			{ name: 'Macieira', name_order: 'Macieira', uf: 'SC' },
			{ name: 'Mafra', name_order: 'Mafra', uf: 'SC' },
			{ name: 'Major Gercino', name_order: 'Major Gercino', uf: 'SC' },
			{ name: 'Major Vieira', name_order: 'Major Vieira', uf: 'SC' },
			{ name: 'Maracajá', name_order: 'Maracaja', uf: 'SC' },
			{ name: 'Maravilha', name_order: 'Maravilha', uf: 'SC' },
			{ name: 'Marema', name_order: 'Marema', uf: 'SC' },
			{ name: 'Massaranduba', name_order: 'Massaranduba', uf: 'SC' },
			{ name: 'Matos Costa', name_order: 'Matos Costa', uf: 'SC' },
			{ name: 'Meleiro', name_order: 'Meleiro', uf: 'SC' },
			{ name: 'Mirim Doce', name_order: 'Mirim Doce', uf: 'SC' },
			{ name: 'Modelo', name_order: 'Modelo', uf: 'SC' },
			{ name: 'Mondaí', name_order: 'Mondai', uf: 'SC' },
			{ name: 'Monte Carlo', name_order: 'Monte Carlo', uf: 'SC' },
			{ name: 'Monte Castelo', name_order: 'Monte Castelo', uf: 'SC' },
			{ name: 'Morro da Fumaça', name_order: 'Morro da Fumaca', uf: 'SC' },
			{ name: 'Morro Grande', name_order: 'Morro Grande', uf: 'SC' },
			{ name: 'Navegantes', name_order: 'Navegantes', uf: 'SC' },
			{ name: 'Nova Erechim', name_order: 'Nova Erechim', uf: 'SC' },
			{ name: 'Nova Itaberaba', name_order: 'Nova Itaberaba', uf: 'SC' },
			{ name: 'Nova Trento', name_order: 'Nova Trento', uf: 'SC' },
			{ name: 'Nova Veneza', name_order: 'Nova Veneza', uf: 'SC' },
			{ name: 'Novo Horizonte', name_order: 'Novo Horizonte', uf: 'SC' },
			{ name: 'Orleans', name_order: 'Orleans', uf: 'SC' },
			{ name: 'Otacílio Costa', name_order: 'Otacilio Costa', uf: 'SC' },
			{ name: 'Ouro', name_order: 'Ouro', uf: 'SC' },
			{ name: 'Ouro Verde', name_order: 'Ouro Verde', uf: 'SC' },
			{ name: 'Paial', name_order: 'Paial', uf: 'SC' },
			{ name: 'Painel', name_order: 'Painel', uf: 'SC' },
			{ name: 'Palhoça', name_order: 'Palhoca', uf: 'SC' },
			{ name: 'Palma Sola', name_order: 'Palma Sola', uf: 'SC' },
			{ name: 'Palmeira', name_order: 'Palmeira', uf: 'SC' },
			{ name: 'Palmitos', name_order: 'Palmitos', uf: 'SC' },
			{ name: 'Papanduva', name_order: 'Papanduva', uf: 'SC' },
			{ name: 'Paraíso', name_order: 'Paraiso', uf: 'SC' },
			{ name: 'Passo de Torres', name_order: 'Passo de Torres', uf: 'SC' },
			{ name: 'Passos Maia', name_order: 'Passos Maia', uf: 'SC' },
	]);
};