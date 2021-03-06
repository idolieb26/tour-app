export const contentBlocksDefaultContent = {
	typography: {
		data:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, suscipit?",
		options: { tag: "p" }
	},
	card: {
		data: {
			cardImage: null,
			cardTitle: "Naslov kartice",
			cardText: "Lorem ipsum dolor sit amet.",
			cardLink: { text: "Več o tem", href: "#" }
		}
	},
	button: {
		data: {
			text: "Tekst povezave",
			href: "#",
			buttonType: "solid",
			buttonColor: "#1f77fa",
			buttonTarget: false,
			buttonAlignment: "center"
		}
	},
	spacer: {
		data: { height: 40, hasDivider: false }
	},
	image: {
		data: {
			imageUrl: {},
			imageAlt: "Opis slike",
			hasShadow: false,
			isRounded: false,
			doesCover: false
		}
	},
	columns: {
		data: []
	},
	contactForm: {
		data: {
			fields: { name: false, email: true, subject: true, message: true },
			receiver: "info@tourdash.app",
			sendText: "pošlji"
		}
	},
	latestPosts: {
		data: { totalAmount: -1, amountPerSlide: 3, sortBy: "date" }
	},
	accommodations: {
		data: { totalAmount: -1, amountPerSlide: 3, sortBy: "numOfBeds" }
	},
	googleMaps: {
		data: { center: { lat: 46.436659, lng: 14.049489 }, zoom: 11, height: 450 }
	},
	reviews: {
		data: { totalAmount: -1, amountPerSlide: 1, sortBy: "date" }
	}
};
