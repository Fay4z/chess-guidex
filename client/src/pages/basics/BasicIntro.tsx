import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { NavLink, Outlet } from "react-router-dom";
const BasicIntro = () => {
    const itemData = [
        {
            title: "What is Chess",
            description: "Foundation of chess and where it is originated",
            link: "/basics/intro/",
        },
        {
            title: "Chess Movements",
            description: "Foundation of chess and where it is originated",
            link: "/basics/intro/chessMovements",
        },
        {
            title: "What is Chess",
            description: "Foundation of chess and where it is originated",
            link: "/basics/intro/",
        },
        {
            title: "Chess Movements",
            description: "Foundation of chess and where it is originated",
            link: "/basics/intro/chessMovements",
        }
    ]
  return (
    <div>
            <div className="grid grid-cols-2 p-8 gap-6 justify-items-center">
            {itemData.map((data) => (
                <Item variant="outline">
                    <ItemContent>
                    <ItemTitle>{data.title}</ItemTitle>
                    <ItemDescription>
                        {data.description}
                    </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                    <Button variant="outline" size="sm">
                        <NavLink to={data.link}>Go</NavLink>
                    </Button>
                    </ItemActions>
                </Item>
            ))}
        </div>
        <Outlet />
    </div>
  );
};

export default BasicIntro;
