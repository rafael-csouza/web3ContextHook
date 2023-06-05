// Just an example API
export default async function handler(req, res) {
  const { search } = req.query;
  console.log('search:', search);

  try {
    const response = await fetch(`https://api.tibiadata.com/v3/character/${search}`);
    const data = await response.json();
    const { character } = data.characters;
    const { name, sex, vocation, level, account_status, comment } = character;

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
    res.status(500).json({ message: 'Error getting character data.' });
  }
}
