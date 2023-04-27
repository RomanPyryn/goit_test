import {
  Button,
  TweetsList,
  TweetsItem,
  TweetsHeader,
  TweetsText,
} from "./Tweets.styled";

const Tweets = () => {
  return (
    <>
      <Button to={`/`}>Back</Button>
      <TweetsList>
        <TweetsItem>
          <TweetsHeader>Tweet 1</TweetsHeader>
          <TweetsText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non
            aliquid assumenda, placeat itaque rem porro eaque delectus harum
            quos, adipisci expedita hic a incidunt? Ad deserunt impedit tenetur
            veritatis?
          </TweetsText>
        </TweetsItem>
        <TweetsItem>
          <TweetsHeader>Tweet 2</TweetsHeader>
          <TweetsText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non
            aliquid assumenda, placeat itaque rem porro eaque delectus harum
            quos, adipisci expedita hic a incidunt? Ad deserunt impedit tenetur
            veritatis?
          </TweetsText>
        </TweetsItem>
        <TweetsItem>
          <TweetsHeader>Tweet 3</TweetsHeader>
          <TweetsText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non
            aliquid assumenda, placeat itaque rem porro eaque delectus harum
            quos, adipisci expedita hic a incidunt? Ad deserunt impedit tenetur
            veritatis?
          </TweetsText>
        </TweetsItem>
        <TweetsItem>
          <TweetsHeader>Tweet 4</TweetsHeader>
          <TweetsText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non
            aliquid assumenda, placeat itaque rem porro eaque delectus harum
            quos, adipisci expedita hic a incidunt? Ad deserunt impedit tenetur
            veritatis?
          </TweetsText>
        </TweetsItem>
        <TweetsItem>
          <TweetsHeader>Tweet 5</TweetsHeader>
          <TweetsText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non
            aliquid assumenda, placeat itaque rem porro eaque delectus harum
            quos, adipisci expedita hic a incidunt? Ad deserunt impedit tenetur
            veritatis?
          </TweetsText>
        </TweetsItem>
        <TweetsItem>
          <TweetsHeader>Tweet 6</TweetsHeader>
          <TweetsText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non
            aliquid assumenda, placeat itaque rem porro eaque delectus harum
            quos, adipisci expedita hic a incidunt? Ad deserunt impedit tenetur
            veritatis?
          </TweetsText>
        </TweetsItem>
      </TweetsList>
    </>
  );
};

export default Tweets;
