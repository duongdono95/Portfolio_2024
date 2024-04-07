import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Button, TextField } from "@mui/material";
import React from "react";

const SectionContact = () => {
  return (
    <MaxWidthWrapper id="contact">
      <SectionTitle title="Contact Me" />
      <p className="pt-5 text-center max-w-96 w-full mx-auto text-[22px]">
        Thanks for visiting my Portfolio,
      </p>
      <p className="pb-5 text-center max-w-96 w-full mx-auto text-[22px]">
        Feel free to ask me any questions!!!
      </p>
      <form
        className="min-w-96 max-w-[30vw] w-full mx-auto my-20 px-5 py-10 flex flex-col gap-5 rounded-lg"
        style={{ backgroundColor: "var(--white09)" }}
      >
        <TextField
          variant="outlined"
          label={"Name"}
          fullWidth
          required
        />
        <TextField
          variant="outlined"
          label={"Email"}
          fullWidth
          required
        />
        <TextField
          variant="outlined"
          label={"Message"}
          fullWidth
          required
        />
        <Button
          className="w-60 mx-auto"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </MaxWidthWrapper>
  );
};

export default SectionContact;
