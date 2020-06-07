import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Inserts seed entries
    return knex("items").del()
        .then( async () => {
        return await knex("items").insert([
            { title: 'Lâmpadas', image: 'lampadas.svg' },
            { title: 'Pilhas e baterias', image: 'baterias.svg' },
            { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
            { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
            { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
            { title: 'Oléo de cozinha', image: 'oleo.svg' },
        ]);
    });
};
