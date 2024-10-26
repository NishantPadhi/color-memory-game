# color-memory-game
Functional Requirements
Game Component Requirements:

Total Number of Boxes:

The main Game component should accept a total number of boxes.
The Game board should always have 4 columns and rows should be adjusted based on that.
The total number of boxes must always be divisible by 4 (column length).
Color Assignment:

The total number of unique colors should be exactly half the number of boxes.
Each color should be assigned to two boxes, forming pairs.
Initial State:

All boxes should initially have a white background color.
Revealing Colors:

When a user clicks on a box, the box's assigned color should be revealed.
If the user clicks on a second box and the colors do not match, both boxes should reset to a white background after 400 ms.
If the colors match, the pair should remain revealed for the rest of the game.
Round Tracking:

Every pair selection (whether successful or unsuccessful) should count as one round.
At the end of the game, the user should be informed of the total number of rounds taken to complete the game.
