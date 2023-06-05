export default async function handler(req, res) {
  const { search } = req.query;
  console.log('search:', search);

  try {
    const response = await fetch(`https://api.tibiadata.com/v3/character/${search}`);
    const data = await response.json();
    // console.log('data:', data);
    console.log('test1:', data.characters.character.name);
    const { character } = data.characters;
    const { name, sex, vocation, level, account_status, comment } = character;

    // Combinar os dados da API externa com dados personalizados
    const customData = {
      name,
      sex,
      vocation,
      level,
      account_status,
      comment,
    };

    res.status(200).json(customData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter os dados do personagem.' });
  }
}
