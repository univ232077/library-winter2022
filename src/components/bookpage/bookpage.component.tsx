import {useParams} from 'react-router-dom';
import {books} from "../../mock/books";
import BookModel from "../../models/book";
import PageNotFound from "../pagenotfound/pagenotfound.component";

export default function BookPage() {
    const { id } = useParams();
    if (id) {
        const foundBooks: BookModel[] = books.filter((book) => {
            return book.id === +id;
        });
        if (foundBooks.length) {
            const book = foundBooks[0];
            return (
                <div>{book.description}</div>
            );
        }
    }
    return (
        <PageNotFound />
    );
}

