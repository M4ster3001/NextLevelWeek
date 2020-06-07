import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
	return knex("cities").insert([
{ name: 'Açailândia', name_order: 'Acailandia', uf: 'MA' },
			{ name: 'Afonso Cunha', name_order: 'Afonso Cunha', uf: 'MA' },
			{ name: 'Água Doce do Maranhão', name_order: 'Agua Doce do Maranhao', uf: 'MA' },
			{ name: 'Alcântara', name_order: 'Alcantara', uf: 'MA' },
			{ name: 'Aldeias Altas', name_order: 'Aldeias Altas', uf: 'MA' },
			{ name: 'Altamira do Maranhão', name_order: 'Altamira do Maranhao', uf: 'MA' },
			{ name: 'Alto Alegre do Maranhão', name_order: 'Alto Alegre do Maranhao', uf: 'MA' },
			{ name: 'Alto Alegre do Pindaré', name_order: 'Alto Alegre do Pindare', uf: 'MA' },
			{ name: 'Alto Parnaíba', name_order: 'Alto Parnaiba', uf: 'MA' },
			{ name: 'Amapá do Maranhão', name_order: 'Amapa do Maranhao', uf: 'MA' },
			{ name: 'Amarante do Maranhão', name_order: 'Amarante do Maranhao', uf: 'MA' },
			{ name: 'Anajatuba', name_order: 'Anajatuba', uf: 'MA' },
			{ name: 'Anapurus', name_order: 'Anapurus', uf: 'MA' },
			{ name: 'Apicum-açu', name_order: 'Apicumacu', uf: 'MA' },
			{ name: 'Araguanã', name_order: 'Araguana', uf: 'MA' },
			{ name: 'Araioses', name_order: 'Araioses', uf: 'MA' },
			{ name: 'Arame', name_order: 'Arame', uf: 'MA' },
			{ name: 'Arari', name_order: 'Arari', uf: 'MA' },
			{ name: 'Axixá', name_order: 'Axixa', uf: 'MA' },
			{ name: 'Bacabal', name_order: 'Bacabal', uf: 'MA' },
			{ name: 'Bacabeira', name_order: 'Bacabeira', uf: 'MA' },
			{ name: 'Bacuri', name_order: 'Bacuri', uf: 'MA' },
			{ name: 'Bacurituba', name_order: 'Bacurituba', uf: 'MA' },
			{ name: 'Balsas', name_order: 'Balsas', uf: 'MA' },
			{ name: 'Barão de Grajaú', name_order: 'Barao de Grajau', uf: 'MA' },
			{ name: 'Barra do Corda', name_order: 'Barra do Corda', uf: 'MA' },
			{ name: 'Barreirinhas', name_order: 'Barreirinhas', uf: 'MA' },
			{ name: 'Belágua', name_order: 'Belagua', uf: 'MA' },
			{ name: 'Bela Vista do Maranhão', name_order: 'Bela Vista do Maranhao', uf: 'MA' },
			{ name: 'Benedito Leite', name_order: 'Benedito Leite', uf: 'MA' },
			{ name: 'Bequimão', name_order: 'Bequimao', uf: 'MA' },
			{ name: 'Bernardo do Mearim', name_order: 'Bernardo do Mearim', uf: 'MA' },
			{ name: 'Boa Vista do Gurupi', name_order: 'Boa Vista do Gurupi', uf: 'MA' },
			{ name: 'Bom Jardim', name_order: 'Bom Jardim', uf: 'MA' },
			{ name: 'Bom Jesus Das Selvas', name_order: 'Bom Jesus Das Selvas', uf: 'MA' },
			{ name: 'Bom Lugar', name_order: 'Bom Lugar', uf: 'MA' },
			{ name: 'Brejo', name_order: 'Brejo', uf: 'MA' },
			{ name: 'Brejo de Areia', name_order: 'Brejo de Areia', uf: 'MA' },
			{ name: 'Buriti', name_order: 'Buriti', uf: 'MA' },
			{ name: 'Buriti Bravo', name_order: 'Buriti Bravo', uf: 'MA' },
			{ name: 'Buriticupu', name_order: 'Buriticupu', uf: 'MA' },
			{ name: 'Buritirana', name_order: 'Buritirana', uf: 'MA' },
			{ name: 'Cachoeira Grande', name_order: 'Cachoeira Grande', uf: 'MA' },
			{ name: 'Cajapió', name_order: 'Cajapio', uf: 'MA' },
			{ name: 'Cajari', name_order: 'Cajari', uf: 'MA' },
			{ name: 'Campestre do Maranhão', name_order: 'Campestre do Maranhao', uf: 'MA' },
			{ name: 'Cândido Mendes', name_order: 'Candido Mendes', uf: 'MA' },
			{ name: 'Cantanhede', name_order: 'Cantanhede', uf: 'MA' },
			{ name: 'Capinzal do Norte', name_order: 'Capinzal do Norte', uf: 'MA' },
			{ name: 'Carolina', name_order: 'Carolina', uf: 'MA' },
			{ name: 'Carutapera', name_order: 'Carutapera', uf: 'MA' },
			{ name: 'Caxias', name_order: 'Caxias', uf: 'MA' },
			{ name: 'Cedral', name_order: 'Cedral', uf: 'MA' },
			{ name: 'Central do Maranhão', name_order: 'Central do Maranhao', uf: 'MA' },
			{ name: 'Centro do Guilherme', name_order: 'Centro do Guilherme', uf: 'MA' },
			{ name: 'Centro Novo do Maranhão', name_order: 'Centro Novo do Maranhao', uf: 'MA' },
			{ name: 'Chapadinha', name_order: 'Chapadinha', uf: 'MA' },
			{ name: 'Cidelândia', name_order: 'Cidelandia', uf: 'MA' },
			{ name: 'Codó', name_order: 'Codo', uf: 'MA' },
			{ name: 'Coelho Neto', name_order: 'Coelho Neto', uf: 'MA' },
			{ name: 'Colinas', name_order: 'Colinas', uf: 'MA' },
			{ name: 'Conceição do Lago-açu', name_order: 'Conceicao do Lagoacu', uf: 'MA' },
			{ name: 'Coroatá', name_order: 'Coroata', uf: 'MA' },
			{ name: 'Cururupu', name_order: 'Cururupu', uf: 'MA' },
			{ name: 'Davinópolis', name_order: 'Davinopolis', uf: 'MA' },
			{ name: 'Dom Pedro', name_order: 'Dom Pedro', uf: 'MA' },
			{ name: 'Duque Bacelar', name_order: 'Duque Bacelar', uf: 'MA' },
			{ name: 'Esperantinópolis', name_order: 'Esperantinopolis', uf: 'MA' },
			{ name: 'Estreito', name_order: 'Estreito', uf: 'MA' },
			{ name: 'Feira Nova do Maranhão', name_order: 'Feira Nova do Maranhao', uf: 'MA' },
			{ name: 'Fernando Falcão', name_order: 'Fernando Falcao', uf: 'MA' },
			{ name: 'Formosa da Serra Negra', name_order: 'Formosa da Serra Negra', uf: 'MA' },
			{ name: 'Fortaleza Dos Nogueiras', name_order: 'Fortaleza Dos Nogueiras', uf: 'MA' },
			{ name: 'Fortuna', name_order: 'Fortuna', uf: 'MA' },
			{ name: 'Godofredo Viana', name_order: 'Godofredo Viana', uf: 'MA' },
			{ name: 'Gonçalves Dias', name_order: 'Goncalves Dias', uf: 'MA' },
			{ name: 'Governador Archer', name_order: 'Governador Archer', uf: 'MA' },
			{ name: 'Governador Edison Lobão', name_order: 'Governador Edison Lobao', uf: 'MA' },
			{ name: 'Governador Eugênio Barros', name_order: 'Governador Eugenio Barros', uf: 'MA' },
			{ name: 'Governador Luiz Rocha', name_order: 'Governador Luiz Rocha', uf: 'MA' },
			{ name: 'Governador Newton Bello', name_order: 'Governador Newton Bello', uf: 'MA' },
			{ name: 'Governador Nunes Freire', name_order: 'Governador Nunes Freire', uf: 'MA' },
			{ name: 'Graça Aranha', name_order: 'Graca Aranha', uf: 'MA' },
			{ name: 'Grajaú', name_order: 'Grajau', uf: 'MA' },
			{ name: 'Guimarães', name_order: 'Guimaraes', uf: 'MA' },
			{ name: 'Humberto de Campos', name_order: 'Humberto de Campos', uf: 'MA' },
			{ name: 'Icatu', name_order: 'Icatu', uf: 'MA' },
			{ name: 'Igarapé do Meio', name_order: 'Igarape do Meio', uf: 'MA' },
			{ name: 'Igarapé Grande', name_order: 'Igarape Grande', uf: 'MA' },
			{ name: 'Imperatriz', name_order: 'Imperatriz', uf: 'MA' },
			{ name: 'Itaipava do Grajaú', name_order: 'Itaipava do Grajau', uf: 'MA' },
			{ name: 'Itapecuru Mirim', name_order: 'Itapecuru Mirim', uf: 'MA' },
			{ name: 'Itinga do Maranhão', name_order: 'Itinga do Maranhao', uf: 'MA' },
			{ name: 'Jatobá', name_order: 'Jatoba', uf: 'MA' },
			{ name: 'Jenipapo Dos Vieiras', name_order: 'Jenipapo Dos Vieiras', uf: 'MA' },
			{ name: 'João Lisboa', name_order: 'Joao Lisboa', uf: 'MA' },
			{ name: 'Joselândia', name_order: 'Joselandia', uf: 'MA' },
			{ name: 'Junco do Maranhão', name_order: 'Junco do Maranhao', uf: 'MA' },
			{ name: 'Lago da Pedra', name_order: 'Lago da Pedra', uf: 'MA' },
			{ name: 'Lago do Junco', name_order: 'Lago do Junco', uf: 'MA' },
			{ name: 'Lago Verde', name_order: 'Lago Verde', uf: 'MA' },
			{ name: 'Lagoa do Mato', name_order: 'Lagoa do Mato', uf: 'MA' },
			{ name: 'Lago Dos Rodrigues', name_order: 'Lago Dos Rodrigues', uf: 'MA' },
			{ name: 'Lagoa Grande do Maranhão', name_order: 'Lagoa Grande do Maranhao', uf: 'MA' },
			{ name: 'Lajeado Novo', name_order: 'Lajeado Novo', uf: 'MA' },
			{ name: 'Lima Campos', name_order: 'Lima Campos', uf: 'MA' },
			{ name: 'Loreto', name_order: 'Loreto', uf: 'MA' },
			{ name: 'Luís Domingues', name_order: 'Luis Domingues', uf: 'MA' },
			{ name: 'Magalhães de Almeida', name_order: 'Magalhaes de Almeida', uf: 'MA' },
			{ name: 'Maracaçumé', name_order: 'Maracacume', uf: 'MA' },
			{ name: 'Marajá do Sena', name_order: 'Maraja do Sena', uf: 'MA' },
			{ name: 'Maranhãozinho', name_order: 'Maranhaozinho', uf: 'MA' },
			{ name: 'Mata Roma', name_order: 'Mata Roma', uf: 'MA' },
			{ name: 'Matinha', name_order: 'Matinha', uf: 'MA' },
			{ name: 'Matões', name_order: 'Matoes', uf: 'MA' },
			{ name: 'Matões do Norte', name_order: 'Matoes do Norte', uf: 'MA' },
			{ name: 'Milagres do Maranhão', name_order: 'Milagres do Maranhao', uf: 'MA' },
			{ name: 'Mirador', name_order: 'Mirador', uf: 'MA' },
			{ name: 'Miranda do Norte', name_order: 'Miranda do Norte', uf: 'MA' },
			{ name: 'Mirinzal', name_order: 'Mirinzal', uf: 'MA' },
			{ name: 'Monção', name_order: 'Moncao', uf: 'MA' },
			{ name: 'Montes Altos', name_order: 'Montes Altos', uf: 'MA' },
			{ name: 'Morros', name_order: 'Morros', uf: 'MA' },
			{ name: 'Nina Rodrigues', name_order: 'Nina Rodrigues', uf: 'MA' },
			{ name: 'Nova Colinas', name_order: 'Nova Colinas', uf: 'MA' },
			{ name: 'Nova Iorque', name_order: 'Nova Iorque', uf: 'MA' },
			{ name: 'Nova Olinda do Maranhão', name_order: 'Nova Olinda do Maranhao', uf: 'MA' },
			{ name: 'Olho D´água Das Cunhãs', name_order: 'Olho Dagua Das Cunhas', uf: 'MA' },
			{ name: 'Olinda Nova do Maranhão', name_order: 'Olinda Nova do Maranhao', uf: 'MA' },
			{ name: 'Paço do Lumiar', name_order: 'Paco do Lumiar', uf: 'MA' },
			{ name: 'Palmeirândia', name_order: 'Palmeirandia', uf: 'MA' },
			{ name: 'Paraibano', name_order: 'Paraibano', uf: 'MA' },
			{ name: 'Parnarama', name_order: 'Parnarama', uf: 'MA' },
			{ name: 'Passagem Franca', name_order: 'Passagem Franca', uf: 'MA' },
			{ name: 'Pastos Bons', name_order: 'Pastos Bons', uf: 'MA' },
			{ name: 'Paulino Neves', name_order: 'Paulino Neves', uf: 'MA' },
			{ name: 'Paulo Ramos', name_order: 'Paulo Ramos', uf: 'MA' },
			{ name: 'Pedreiras', name_order: 'Pedreiras', uf: 'MA' },
			{ name: 'Pedro do Rosário', name_order: 'Pedro do Rosario', uf: 'MA' },
			{ name: 'Penalva', name_order: 'Penalva', uf: 'MA' },
			{ name: 'Peri Mirim', name_order: 'Peri Mirim', uf: 'MA' },
			{ name: 'Peritoró', name_order: 'Peritoro', uf: 'MA' },
			{ name: 'Pindaré-mirim', name_order: 'Pindaremirim', uf: 'MA' },
			{ name: 'Pinheiro', name_order: 'Pinheiro', uf: 'MA' },
			{ name: 'Pio Xii', name_order: 'Pio Xii', uf: 'MA' },
			{ name: 'Pirapemas', name_order: 'Pirapemas', uf: 'MA' },
			{ name: 'Poção de Pedras', name_order: 'Pocao de Pedras', uf: 'MA' },
			{ name: 'Porto Franco', name_order: 'Porto Franco', uf: 'MA' },
			{ name: 'Porto Rico do Maranhão', name_order: 'Porto Rico do Maranhao', uf: 'MA' },
	]);
};