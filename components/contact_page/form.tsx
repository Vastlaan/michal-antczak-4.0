import { useState } from "react";
import styled, { withTheme } from "styled-components";
import {
  respond,
  Heading5,
  Text2,
  fonts,
  SpanBlue,
  ButtonPrimary,
} from "../../styles";

function Form({ theme }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendForm(e) {
    e.preventDefault();
    const data = { name, email, message };
    console.log({ data });
  }

  return (
    <Container onSubmit={sendForm}>
      <Heading5 margin="0 0 1.4rem 0" color={theme.greyPrimary}>
        <span>Contact</span> Form
      </Heading5>
      <Text2 size="1.4rem">
        Do you have a question or comment? Fill in the contact form below, I
        will answer your question as soon as possible. Do you have a question
        about my services? Please state it in the form below:
      </Text2>
      <InputsWrapper>
        <Field>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Your name"
            required
          />
        </Field>
        <Field>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Your email"
            required
          />
        </Field>
        <Field>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols={30}
            rows={5}
            placeholder="Type your question here..."
            required
          ></textarea>
        </Field>
      </InputsWrapper>
      <Text2 size="1.4rem">
        <SpanBlue>
          By submitting this form, I agree that this data may be used only for
          processing this question. My data will not be used for other purposes
          and will not be provided to third parties.
        </SpanBlue>
      </Text2>
      <ButtonPrimary
        margin="2.7rem 0 0 0"
        content="Send"
        color={theme.primary}
        type="submit"
      >
        <span>Send</span>
      </ButtonPrimary>
    </Container>
  );
}
export default withTheme(Form);

const Container = styled.form`
  grid-column: 1/-1;
  grid-row: 2/3;
  background-color: ${(p) => p.theme.greySecondary};
  padding: 2.7rem;
  box-shadow: 0 0 4.7rem rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  max-width: 65rem;
  border: 3px solid ${(p) => p.theme.primary};
  justify-self: end;

  ${respond("m", "grid-column: 2/4;grid-row: 1/-1;")}
`;
const InputsWrapper = styled.div`
  margin: 2.7rem 0 1.4rem 0;
  display: flex;
  flex-wrap: wrap;
`;
const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4.7rem;

  label {
    font-family: ${fonts.heading};
    font-size: 1.6rem;
    color: ${(p) => p.theme.greyPrimary};
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  input {
    border: 1px solid ${(p) => p.theme.greyTertiary};
    background-color: none;
    padding: 1.4rem;
    font-size: 1.4rem;

    &:focus,
    :active {
      outline: none;
    }
  }
  textarea {
    border: 1px solid ${(p) => p.theme.greyTertiary};
    background-color: none;
    padding: 1.4rem;
    font-size: 1.4rem;
    max-width: 44rem;

    &:focus,
    :active {
      outline: none;
    }
  }
`;
