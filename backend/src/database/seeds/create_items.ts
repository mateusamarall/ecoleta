import Knex from "knex";
export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "Lãmpadas", image: "lampadas.svg" },
    { title: "Pilhas e Baterias", image: "baterias.svg" },
    { title: "Pápeis e Papelão", image: "papeis-papelao.svg" },
    { title: "Resíduos Eletrônicos", image: "eletronicos.svg" },
    { title: "Resíduos Orgânicos", image: "organicos.svg" },
    { title: "óleo de cozinha", image: "oleo.svg" },
  ]);
}
