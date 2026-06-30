import React from "react";

import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Stack from "@mui/joy/Stack";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";

import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const list = [
    {
        id: 1,
        productName: "Lavash",
        imagePath: "/img/lavash.webp",
    },
    {
        id: 2,
        productName: "Cutlet",
        imagePath: "/img/cutlet.webp",
    },
    {
        id: 3,
        productName: "Kebab",
        imagePath: "/img/kebab.webp",
    },
    {
        id: 4,
        productName: "Kebab Fresh",
        imagePath: "/img/kebab-fresh.webp",
    },
];

export default function PopularDishes() {
    return (
        <div className="popular-dishes-frame">
            CARDS
            {/* <CssVarsProvider>
                <Container>
                    <Stack className="popular-section">
                        <Box className="category-title">Popular Dishes</Box>

                        <Stack
                            className="card-frame"
                            direction="row"
                            flexWrap="wrap"
                            gap={2}
                        >
                            {list.map((ele) => (
                                <Card
                                    key={ele.id}
                                    className="card"
                                    sx={{
                                        minHeight: 280,
                                        width: 250,
                                    }}
                                >
                                    <CardCover>
                                        <img src={ele.imagePath} alt={ele.productName} />
                                    </CardCover>

                                    <CardCover
                                        sx={{
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1))",
                                        }}
                                    />

                                    <CardContent sx={{ justifyContent: "flex-end" }}>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <Typography
                                                level="h2"
                                                fontSize="lg"
                                                textColor="#fff"
                                            >
                                                {ele.productName}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    fontWeight: "md",
                                                    color: "neutral.300",
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                20
                                                <VisibilityIcon
                                                    sx={{
                                                        fontSize: 25,
                                                        ml: 0.5,
                                                    }}
                                                />
                                            </Typography>
                                        </Stack>
                                    </CardContent>

                                    <CardOverflow
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1.5,
                                            py: 1.5,
                                            px: "var(--Card-padding)",
                                            borderTop: "1px solid",
                                            borderColor: "divider",
                                            minHeight: 60,
                                        }}
                                    >
                                        <Typography
                                            startDecorator={<DescriptionOutlinedIcon />}
                                            textColor="neutral.300"
                                        >
                                            This is a delicious meal
                                        </Typography>
                                    </CardOverflow>
                                </Card>
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </CssVarsProvider> */}
        </div>
    );
}