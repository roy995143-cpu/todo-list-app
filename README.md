# To-Do List App

A simple yet powerful to-do list application with local storage functionality. All your tasks are saved automatically in your browser's local storage, so they persist even after you close the page.

## Features

✅ **Add Tasks** - Quickly add new tasks to your list  
✅ **Mark Complete** - Check off tasks as you complete them  
✅ **Delete Tasks** - Remove individual tasks  
✅ **Filter Tasks** - View all, active, or completed tasks  
✅ **Local Storage** - Tasks are saved automatically and persist between sessions  
✅ **Task Statistics** - See total and completed task counts  
✅ **Clear Completed** - Bulk delete all completed tasks  
✅ **Responsive Design** - Works on desktop and mobile devices  

## How to Use

### Online
No installation needed! Just open `index.html` in your browser.

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/roy995143-cpu/todo-list-app.git
cd todo-list-app
```

2. Start a local server:
```bash
npm start
```

Or use Python:
```bash
python -m http.server 8000
# or for Python 3
python3 -m http.server 8000
```

3. Open your browser and navigate to:
```
http://localhost:8000
```

## How It Works

### Local Storage
- All tasks are stored in your browser's local storage
- Data persists even after closing the browser
- No server required
- Privacy: Your tasks stay on your device

### Class Structure

**TodoApp Class** manages:
- Adding and deleting tasks
- Toggling task completion status
- Filtering tasks
- Rendering the UI
- Local storage operations

## Project Structure

```
todo-list-app/
├── index.html      # HTML structure
├── styles.css      # Styling and responsive design
├── app.js          # Main application logic
├── package.json    # Project metadata
├── .gitignore      # Git ignore rules
└── README.md       # This file
```

## Features Explained

### Adding Tasks
- Type in the input field and click "Add" or press Enter
- Empty tasks are prevented with validation

### Filtering
- **All**: Shows all tasks
- **Active**: Shows only incomplete tasks
- **Completed**: Shows only completed tasks

### Statistics
- **Total**: Number of all tasks
- **Completed**: Number of completed tasks
- Progress indicator for task completion

### Clear Completed
- Removes all completed tasks at once
- Confirmation dialog prevents accidental deletion

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and animations
- **Vanilla JavaScript**: No dependencies, pure ES6
- **Local Storage API**: Browser-based data persistence

### Browser Compatibility
- Chrome 4+
- Firefox 3.5+
- Safari 4+
- Edge (all versions)
- Opera 11+

## Tips & Tricks

1. **Keyboard Shortcuts**: Press Enter to add tasks quickly
2. **Bulk Operations**: Use "Clear Completed" to remove multiple tasks at once
3. **Data Persistence**: Your tasks are automatically saved - no need to manually save
4. **Mobile Friendly**: Works great on phones and tablets

## Future Enhancements

- [ ] Due dates for tasks
- [ ] Priority levels
- [ ] Categories/tags
- [ ] Edit existing tasks
- [ ] Search/filter by text
- [ ] Dark mode
- [ ] Export/import tasks
- [ ] Cloud sync

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Contributing

Feel free to fork this repository and submit pull requests for any improvements!

---

**Enjoy organizing your tasks!** 🚀