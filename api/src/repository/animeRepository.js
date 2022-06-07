import { con } from './connection.js';

export async function AdicionarAnime(anime) {
    const comando = 
    `insert into tb_anime (nm_anime)
	                values (?)`
    
    const [resposta] = await con.query(comando,[anime.nome]); anime.id = resposta.insertId;
    return anime;
}

export async function ChecarAnimes() {
    const comando = 
    ` select 
            nm_anime,
            id_anime
    from 	tb_anime`
    
    const [infos] = await con.query(comando);
    return infos;
 }

