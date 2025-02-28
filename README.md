# JS DOM Challenges

### 🚨 Important Instructions

- Ensure that you meet all the specified requirements for each challenge. These are mandatory, but you are free to add extra features.
- You may customize the UI as you like, as long as it adheres to all given requirements.
- Creative solutions are encouraged!
- Use only HTML, CSS, and JavaScript—frameworks and libraries are not allowed.
- Share your learnings from these challenges in a blog format

## Challenge 1: Light Bulb Toggle 💡 🌚

- Create a webpage featuring a light bulb image or representation.
- Implement a button that toggles the light bulb between on and off states.
- When the bulb is on, it should appear in yellow or gold (or any other suitable color) with a glow effect.
- When the bulb is off, it should appear gray with no glow.
- The button text should dynamically update based on the bulb’s state (e.g., "Turn On" / "Turn Off").
- Apply a dark mode effect to the page when the bulb is off.

## Challenge 2: Change Text Color 🦎

- Create a webpage with a heading that says "Change My Color!"
- Add five buttons: Red, Green, Blue, Purple (or any four colors of your choice) and Reset.
- When a color button is clicked, the heading’s text color should change to the corresponding color.
- Clicking the Reset button should restore the text color to black.

## Challenge 3: Real-time Form Input Display 📋

- Design a profile form with the following fields:
  - Name (text input)
  - Job Title (text input)
  - Age (number input)
  - Bio (textarea)
- Create a "Profile Preview" section that dynamically displays the entered information.
- The preview should update in real-time as the user types.
- If a field is left empty, display "Not provided" in the preview instead.

## Challenge 4: Task Management 🧏🏻‍♂️

### Task Management

- Allow users to add a new task by typing into an input field and clicking the "Add" button or pressing Enter.
- Display each task in a list with a checkbox and a delete button.
- Users should be able to remove tasks by clicking the "Delete" button.

### Task Completion

- Users should be able to mark tasks as completed by clicking the checkbox next to a task.
- Completed tasks should be visually distinct (e.g., strikethrough text and a different color).
- Users should be able to uncheck a completed task, reverting it to an incomplete state.

### Task List State

- If there are no tasks, display a message: "No tasks yet. Add one above!"
- This message should disappear once a task is added.
- If all tasks are deleted, the message should reappear.

### Task Statistics

- Display the total number of tasks.
- Show the number of completed tasks.
- These statistics should update dynamically as tasks are added, completed, or deleted.

## Challenge 5: Image Carousel Application 🖼️

### Image Display

- Display a set of images in a carousel format.
- Only one image should be visible at a time.
- Each image should have a caption displayed at the bottom.

### Navigation Controls

- Users should be able to navigate through the images using:
  - A "Next" button to move to the next image.
  - A "Previous" button to go back to the previous image.
  - Clicking on an indicator dot to jump to a specific image.

### Automatic Slideshow

- Support an auto-play mode where images transition automatically.
- Users should be able to start and stop the auto-play mode with a button.
- Display a timer showing how many seconds remain before the next image transition.

### Indicators

- Display navigation dots (indicators) below the carousel.
- The indicator for the active image should be highlighted.
- Clicking an indicator should navigate directly to the corresponding image.


## Challenge 6: Enhanced Clock ⏰

### Digital Clock Display

- Display the current time in HH:MM:SS format.
- The time should update every second.
- Numbers should be padded with leading zeros (e.g., 01:05:08).
- Use a clear and readable font for better visibility.

### Analog Clock Face

- The clock should feature a circular face with numbers 1 to 12.
- Include three hands to indicate:
  - Hour (shortest and thickest)
  - Minute (medium length and thickness)
  - Second (longest and thinnest)
- The center point should be marked with a dot.

### Hand Movement

- The second hand should move every second (rotating 6 degrees per second).
- The minute hand should move smoothly (rotating 6 degrees per minute).
- The hour hand should consider both hours and minutes for its position.
- The hands should rotate smoothly instead of jumping.

### Date Display

- Display the current date below the clock.
- The format should include day, month, and year.

## Challenge 7: Accordion 🪗

### Accordion Structure

- The container should display multiple collapsible sections.
- Each section should consist of a header and a content area.
- Only one section should be open at a time.
- Sections should be visually separated for clarity.

### Section Headers

- Headers should function as clickable buttons.
- Each header should display:
  - Section title on the left.
  - A dropdown arrow (▼) on the right.
- Headers should have hover effects for better interaction.
- The arrow should rotate when a section is opened.

### Content Display

- The content should be hidden by default.
- When opened, the content should appear with a fade-in animation.
- Content styling should be distinct from the headers.
- The content area should adjust dynamically to the text length.

### Interaction Behavior

- Clicking a closed section should:
  - Open that section.
  - Close any previously open section.
- Clicking an open section should:
  - Close that section.
- At any time, only one section can be open.

## Challenge 8: Simple Shopping Cart 🛒

### Product Display

- Display at least four products, each with:
  - Product name
  - Price
  - An "Add to Cart" button
- Each product should include a simple image (you can use placeholder images).

### Cart Functionality

- Users should be able to:
  - Add items to the cart.
  - Remove items from the cart.
  - Adjust item quantities (increase/decrease).
- The cart should display:
  - A list of added items with their quantities.
  - Individual item subtotals (price × quantity).
  - The total cost of all items in the cart.

## Challenge 9: Sliding Menu 🪟

### Menu Structure

- Create a slide-out menu panel that opens from the right side.
- The panel should contain at least four menu items.
- Maintain a clear navigation hierarchy for easy usability.
- Include a header/title at the top of the menu panel.
- Add a close button in the top right corner of the menu.

### Interaction Features

- Implement a toggle button to open the menu.
- Clicking the close button should dismiss the menu.
- Clicking a menu item should:
  - Show an alert message indicating which item was clicked.
  - Automatically close the menu.
- Clicking outside the menu should also close it.
- Ensure the menu is fully hidden when closed (not partially visible).

### UX (User Experience)

- Implement smooth transitions for menu opening and closing.
- Ensure no content shifts when the menu opens or closes.
- Provide clear visual feedback on interactions (e.g., hover effects).
- Use proper cursor indicators for clickable elements.
- Prevent scrolling issues when the menu is open.

## Challenge 10: Interactive Memory Card Game 🂫

### Game Setup

- Create a memory matching card game with:
  - A 4×4 grid (containing 8 pairs of cards).
  - Cards that flip when clicked.
  - A matching system where players must find pairs to win.
  - A move counter and a timer to track progress.

### Game Features

- Shuffle the cards at the start of the game.
- Show a victory message via an alert when all pairs are matched.
- Include a restart button to reset the game.
- Display a score based on the number of moves and time taken.

### Emojis (Optional)

- You can use any images, icons, or emojis for the cards.
- Suggested 8 emojis for card pairs:
  🐶, 🐱, 🐭, 🐹, 🐰, 🦊, 🐻, 🐼.
