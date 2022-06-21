// ポケモンAPIから画像情報を取得する部分をカスタムHook化
// このカスタムHookはポケモンAPIからピカチュウ画像（画像URL）を取得する為のカスタムHook
import axios from "axios";

// 無駄なレンダリングを防ぎ、State状態を管理する。
import { useState } from "react";
import { useCallback } from "react";

const url = "https://pokeapi.co/api/v2/pokemon/25";

export const useImageGet = () => {
  type Pokemon = {
    sprites: { front_default: string; back_female: string };
  };

  //  ポケモンAPIからのピカチュウの画像URLをstate管理する
  //  型はジェネリクスで指定(string型)
  const [apiPokemonfront, setApiPokemonfront] = useState<string>(""); // →前面画像のURLのstate管理
  const [apiPokemonBack, setApiPokemonBack] = useState<string>(""); // →背面画像のURLのstate管理
  const imageFetch = useCallback(async () => {
    try {
      //  ポケモンAPIからピカチュウの情報をaxiosで取得
      //  型はジェネリクスで指定(PoKemon型)
      const { data } = await axios.get<Pokemon>(url);

      //  ピカチュウの前面、背面のURLを取得
      const frontUrl = data.sprites.front_default;
      const backUrl = data.sprites.back_female;
      // ポケモンAPIのピカチュウ情報を格納
      setApiPokemonfront(frontUrl);
      setApiPokemonBack(backUrl);
    } catch {
      console.log("画像が取得できませんでした");
    }
  }, []);

  return { apiPokemonfront, apiPokemonBack, imageFetch }; // 関数と前面、背面のURLを返す
};
