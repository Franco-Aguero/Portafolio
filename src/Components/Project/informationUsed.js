import PokeApp from '../Images/PokeApp2.png';
import NoteBlock from '../Images/BlockOfNote2.png';
import Wallet from '../Images/wallet.png';
import Skillify from '../Images/skillify.png';
export default {
    projectList: [
        {
            name:"Payment Systems",
            img:Skillify,
            url:"https://github.com/Franco-Aguero/Sistema-de-pagos",
            FrontTech:"El Front-End se llevo acabo con: NextJs | Tailwind CSS.",
            BackTech:null,
            information:{
                es: `Esta app es un sistema de pagos en la cual utilizamos la implementacion de Mercado Pago CheckoutPro y Stripe Elements con la finalidad de simular el pago de un carrito de compras`,
                en:``,
            }
        },
        {
            name:"Wall-et",
            img:Wallet,
            url:"https://github.com/julianpiniel/Wall-et",
            FrontTech:"El Front-End se llevo acabo con: React | Redux | CSS Modules.",
            BackTech:"En el Back-End se utilizo: NodeJS | Express | Sequelize | Postgres | JSON Web Token.",
            information:{
                es: `Esta aplicación fue pensada con el objetivo de que los usuarios puedan pagar cuentas, transferir,
                retirar y mucho mas.`,
                en:``,
            }
        },
        {
            name:"PokeApp",
            img:PokeApp,
            url:"https://github.com/Franco-Aguero/PokeApp",
            FrontTech:"El Front-End se llevo acabo con: React | Redux | CSS Modules.",
            BackTech:"En el Back-End se utilizo: NodeJS | Express | Sequelize | Postgres.",
            information:{
                es: `Esta aplicación fue diseñada con el objetivo de que los usuarios puedan buscar de distintas maneras un pokemon y también puedan crearlos.`,
                en:``,
            }
        },
        {
            name:"Notes",
            img:NoteBlock,
            url:"https://github.com/Franco-Aguero/Notes-App",
            FrontTech:"El Front-End se llevo acabo con: React | Redux | CSS Modules.",
            BackTech:null,
            information:{
                es: `Esta aplicación fue pensada para que los usuarios se sientan libres de guardar sus notas para no olvidarlas.`,
                en:``,
            }
        }
    ],
}
//es=Español-en=ingles