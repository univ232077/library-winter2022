import './catalog.component.css';
import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {books} from "../../mock/books";

export default function CatalogDisplay() {
    const [state, setState] = useState({
        search: {
            minPrice: 0,
            maxPrice: 0,
            bookId: 0,
            bookName: '',
            bookAuthor: ''
        }
    });

    if (!(books.length)) {
        return <div>На данный момент у нас нет книг!</div>
    }

    const bookPrices = books.map(book => {return book.price});
    const minBookPrice = Math.min(...bookPrices);
    const maxBookPrice = Math.max(...bookPrices);

    const searchState = state.search;
    const bookCards = books.map((book) => {
        if (
            (searchState.minPrice && book.price < searchState.minPrice) ||
            (searchState.maxPrice && book.price > searchState.maxPrice) ||
            (searchState.bookId && book.id !== +searchState.bookId) ||
            (searchState.bookName && !(book.name.toLowerCase().includes(searchState.bookName.toLowerCase()))) ||
            (searchState.bookAuthor && !(book.author.toLowerCase().includes(searchState.bookAuthor.toLowerCase())))
        ) {
            return null;
        }
        return <div key={book.id} className="product-card">
            <Link to={`/book/${book.id}`}>{book.name}</Link>
            <img src={book.image} alt=""/>
            <div>Автор: {book.author}</div>
            <div>Цена: {book.price}</div>
        </div>
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newState: any = {...state};
        newState['search'][event.target.name] = event.target.value;
        setState(newState);
    };

    return (
        <div>
            <div className="search-menu">
                <div className="search-menu-section">
                    <h4 className="centered-header">Поиск в каталоге</h4>
                    <input type="text" placeholder={'Название книги'} name={'bookName'} onChange={handleInputChange}/>
                    <input type="text" placeholder={'Имя автора'} name={'bookAuthor'} onChange={handleInputChange}/>
                    <input type="text" placeholder={'Артикул'} name={'bookId'} onChange={handleInputChange}/>
                    <input type="number" min={minBookPrice} name={'minPrice'} onChange={handleInputChange}
                           max={maxBookPrice} placeholder={`Мин. цена: от ${minBookPrice} вкл.`} />
                    <input type="number" min={minBookPrice} name={'maxPrice'} onChange={handleInputChange}
                           max={maxBookPrice} placeholder={`Макс. цена до ${maxBookPrice} вкл.`} />
                </div>
            </div>
            <div className="products-menu">{bookCards}</div>
        </div>
    )
}
