import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import { Product } from "../../../lib/types/product";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePopularDishes } from "./selector";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";


/** REDUX SLICE & SELECTOR**/
const popularDishesRetriever = createSelector(
    retrievePopularDishes,
    (popularDishes) => ({ popularDishes })
)

export default function PopularDishes() {
    const { popularDishes } = useSelector(popularDishesRetriever);

    const history = useHistory();

    const chooseDishHandler = (id: string) => {
        history.push(`/products/${id}`);
    }
    return (
        <div className="popular-dishes-frame">
            <Container>
                <Stack className="popular-section">
                    <Box className="category-title">Popular Dishes</Box>
                    <CssVarsProvider>
                        <Stack className="cards-frame">
                            {popularDishes.map((product: Product) => {
                                const imagePath = `${serverApi}/${product.productImages[0]}`
                                return (
                                    <Card className={"card"} key={product._id} onClick={() => chooseDishHandler(product._id)}>
                                        <CardCover>
                                            <img src={imagePath} alt="" />
                                        </CardCover>
                                        <CardCover className={"card-cover"} />
                                        <CardContent sx={{ justifyContent: "flex-end" }}>
                                            <Stack
                                                direction={"row"}
                                                sx={{ justifyContent: "space-between" }}
                                            >
                                                <Typography
                                                    level="h2"
                                                    textColor="#fff"
                                                    sx={{ fontSize: "lg", mb: 1 }}
                                                >
                                                    {product.productName}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontWeight: "md",
                                                        color: "neutral.300",
                                                        alignItems: "center",
                                                        display: "flex",
                                                    }}
                                                >
                                                    {product.productViews}
                                                    <VisibilityIcon
                                                        sx={{ fontSize: 25, marginLeft: "5px" }}
                                                    />
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                        <CardOverflow
                                            sx={{
                                                display: "flex",
                                                gap: 1.5,
                                                py: 1.5,
                                                px: "var(--Card-padding)",
                                                borderTop: "1px solid",
                                                height: "60px",
                                            }}
                                        >
                                            <Typography
                                                startDecorator={<DescriptionOutlinedIcon />}
                                                textColor="neutral.300"
                                            >
                                                {product.productDecs}
                                            </Typography>
                                        </CardOverflow>
                                    </Card>
                                );
                            })}
                        </Stack>
                    </CssVarsProvider>
                </Stack>
            </Container>
        </div>
    );
}