exports.up = function(knex) {
    return knex.schema.createTable("livros", (tabela) => {
        tabela.increments();
        tabela.string("titulo", 80).notNullable();
        tabela.string("autor", 60).notNullable();
        tabela.integer("ano", 4).notNullable();
        tabela.decimal("preco", 9.2).notNullable();
        tabela.string("foto", 100).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("livros");
};
