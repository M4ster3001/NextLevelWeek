import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("points").del()
        .then(() => {
            // Inserts seed entries
            return knex("points").insert([
                {
                    image: '/img/teste.jpg',
                    name: 'Aldo',
                    email: 'aldo@gmail.com',
                    telefone: '34998765678',
                    latitude: -11.345,
                    longitude: -34.567,
                    city: 'Bauru', 
                    uf: 'SP'
                },
                {
                    image: '/img/2.jpg',
                    name: 'Luiz',
                    email: 'luiz@gmail.com',
                    telefone: '34998765678',
                    latitude: -15.345,
                    longitude: -34.567,
                    city: 'Bauru', 
                    uf: 'SP'
                }
            ]);
        });
};
