const songlist = [
	{
		id: '',
		title: 'Mutante',
		artist: 'MEL',
		duration: '2:22',
	},
	{
		id: '',
		title: 'Baby 95',
		artist: 'Liniker',
		duration: '5:18',
	},
	{
		id: '',
		title: 'Rainha de Copas',
		artist: 'Majur, Liniker',
		album: 'Ojunifé',
		duration: '2:28',
	},
	{
		id: '',
		title: 'Oasis',
		artist: 'Potyguara Bardo, MangoLab',
		duration: '4:23',
	},
	{
		id: '',
		title: 'Mapa',
		artist: 'Bruna Mendez, Davi Sabbag',
		duration: '3:11',
	},
	{
		id: '',
		title: 'Foi Mal',
		artist: 'Urias',
		duration: '2:45',
	},
	{
		id: '',
		title: 'Bom Mesmo É Estar Debaixo D\'Água',
		artist: 'Luedji Luna',
		duration: '4:31',
	},
	{
		id: '',
		title: 'Salvador',
		artist: 'Arthur Nogueira, Hiran, Ubuntu',
		duration: '2:42',
	},
	{
		id: '',
		title: 'E Se Não Era Amor',
		artist: 'Romero Ferro',
		duration: '3:30',
	},
	{
		id: '',
		title: 'Linda',
		artist: 'Os Amantes, Jaloo, Strobo',
		duration: '3:59',
	},
	// {
	// 	id: '',
	// 	title: '',
	// 	artist: '',
	// 	album: '',
	// 	duration: '',
	// },
	// {
	// 	id: '',
	// 	title: 'Eu Vou Fazer Uma Macumba Pra Te Amarrar, Maldito! - Ao Vivo',
	// 	artist: 'Johnny Hooker',
	// 	album: '',
	// 	duration: '',
	// },
];

function idNumber() {
	for (let i = 0; i < songlist.length; i++) {
		songlist[i].id = i + 1;
	}
}
idNumber();

export { songlist };
