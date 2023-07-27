import '../GalleryItem/Gallery.css'

export const GalleryItem = ({
    itemUrl,
    title,
    author,
    price,
    quantity
}) => {
    return(
        <>
         <img src={itemUrl} alt="" width="480" />
         <h2 className = 'title'>{title}</h2>
         <p>Автор: <a href={author}>(tag)</a></p>
         <p>Ціна: {price} грн</p>
         <p>Доступність: {quantity} закінчується чи є в наявності</p>
         <button type="button">Додати в кошик</button>
        </>
    )
}

// GalleryItem.propTypes = {
//     itemUrl: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     quantity: PropTypes.number.isRequired,
//     tag: PropTypes.string.isRequired,
// }