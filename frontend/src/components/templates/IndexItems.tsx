import { translateBigCategory } from "../../reducks/items/operations";
import { itemState } from "../../reducks/items/type";
import ItemMenu from "../molecules/ItemMenu";
import Table, { StyledTableCell, StyledTableRow } from "../molecules/Table";
import ShowItem from "../organisms/ShowItem";

type Props = {
    items: itemState[];
}

const IndexItems: React.FC<Props> = (props) => {
    return (
        <Table headerItems={["収支発生日","カテゴリ","内容","値段","操作"]}>
            {props.items.map((item) => (
                <StyledTableRow key={item.id}>
                    <StyledTableCell align="center">
                        {item.date}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {translateBigCategory(item.category.big_category)}/{item.category.name}
                    </StyledTableCell>
                    <StyledTableCell align="center"><ShowItem item={item}/></StyledTableCell>
                    <StyledTableCell align="right">{item.price}円</StyledTableCell>
                    <StyledTableCell align="center">
                        <ItemMenu/>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
        </Table>
    );
}

export default IndexItems;