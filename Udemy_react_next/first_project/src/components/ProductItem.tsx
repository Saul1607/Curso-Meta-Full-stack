interface Props {
    title: string;
    id: number;
}

//type Props = {
//    title: string;
//    id: number;
//}

const ProductItem = ({ title, id }: Props) => {
    return (
        <li>
            {title} - {id}
        </li>
    );
};
export default ProductItem;