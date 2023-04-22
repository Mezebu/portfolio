import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";

import Link from "next/link";

import { StyledPaper } from "./styles";

const links = [
  {
    id: uuidv4(),
    title: "Home",
    page: "/",
  },
  {
    id: uuidv4(),
    title: "Projects",
    page: "/projects",
  },
  {
    id: uuidv4(),
    title: "Contact",
    page: "/contact",
  },
];

const MobileMenu = () => {
  return (
    <AnimatePresence mode="sync">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          type: "tween",
        }}
      >
        <StyledPaper>
          {links.map(({ id, title, page }) => (
            <Button
              component={Link}
              key={id}
              href={page}
              variant="text"
              sx={{
                m: 3,
                color: (theme) =>
                  theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              {title}
            </Button>
          ))}
        </StyledPaper>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileMenu;
