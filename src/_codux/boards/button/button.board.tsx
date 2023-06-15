import { createBoard } from "@wixc3/react-board";
import { Button } from "@actionishope/shelley/Button";

export default createBoard({
  name: "Button",
  Board: () => (
    <Button variant="primary" onPress={() => alert("HELLO")}>
      I am a Button
    </Button>
  ),
});
