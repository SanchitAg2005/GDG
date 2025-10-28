# How to Add Labs and Topics - Complete Guide

## Overview
The GDG Study Jam Portal uses a JSON-based data structure for easy content management. Each lab contains multiple topics, and each topic has an associated video tutorial.

## File Structure
- `data/labs.json` - Contains all lab and topic data
- `app/labs/page.tsx` - Main labs page component
- `app/layout.tsx` - Root layout (navbar/footer removed)

## Adding a New Lab

### Step 1: Edit `data/labs.json`
Add a new lab object to the JSON array:

\`\`\`json
{
  "id": "lab7",
  "title": "Your Lab Title",
  "courseCode": "GCL-107",
  "topics": [
    {
      "id": "topic1",
      "name": "First Topic Name",
      "video": "https://www.youtube.com/embed/VIDEO_ID"
    },
    {
      "id": "topic2",
      "name": "Second Topic Name",
      "video": "https://www.youtube.com/embed/VIDEO_ID"
    }
  ]
}
\`\`\`

### Step 2: Get YouTube Video Embed URL
1. Go to the YouTube video you want to embed
2. Click "Share" → "Embed"
3. Copy the URL from the `src` attribute (e.g., `https://www.youtube.com/embed/4D3X6Fl76WY`)
4. Paste it in the `video` field

### Step 3: Save and Test
- Save the `data/labs.json` file
- The new lab will automatically appear on the labs page
- Click on the lab to expand and view topics
- Click on a topic to play the video

## Lab Structure Explained

### Lab Object Properties
| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique identifier (e.g., "lab1", "lab2") |
| `title` | string | Display name of the lab |
| `courseCode` | string | Course code badge (e.g., "GCL-101") |
| `topics` | array | Array of topic objects |

### Topic Object Properties
| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique identifier within the lab (e.g., "topic1") |
| `name` | string | Display name of the topic |
| `video` | string | YouTube embed URL |

## Example: Adding a Complete Lab

\`\`\`json
{
  "id": "lab7",
  "title": "BigQuery Analytics",
  "courseCode": "GCL-107",
  "topics": [
    {
      "id": "topic1",
      "name": "Introduction to BigQuery",
      "video": "https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
    },
    {
      "id": "topic2",
      "name": "Writing SQL Queries",
      "video": "https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
    },
    {
      "id": "topic3",
      "name": "Data Visualization",
      "video": "https://www.youtube.com/embed/YOUR_VIDEO_ID_3"
    },
    {
      "id": "topic4",
      "name": "Advanced Analytics",
      "video": "https://www.youtube.com/embed/YOUR_VIDEO_ID_4"
    }
  ]
}
\`\`\`

## How the UI Works

### Labs Page Layout
1. **Lab Header** - Shows course code and lab title. Click to expand/collapse
2. **Topics List** - Left sidebar showing all topics for the expanded lab
3. **Video Player** - Right side showing the selected topic's video
4. **Video Embed** - YouTube video player with full controls

### User Interaction Flow
1. User visits `/labs` page
2. User sees all labs collapsed
3. User clicks a lab to expand it
4. Topics appear in the left sidebar
5. User clicks a topic to select it
6. Video plays in the right panel
7. User can click another topic to switch videos

## Customization Tips

### Changing Colors
Edit `app/globals.css` to modify:
- `--color-primary-original: #4285f4` - Primary blue color
- `--color-accent-green-original: #0f9d58` - Accent green color

### Adding More Topics
Simply add more topic objects to the `topics` array in any lab:

\`\`\`json
{
  "id": "topic5",
  "name": "New Topic Name",
  "video": "https://www.youtube.com/embed/NEW_VIDEO_ID"
}
\`\`\`

### Removing a Lab
Delete the entire lab object from `data/labs.json`

### Reordering Labs
Change the order of lab objects in the `data/labs.json` array

## Troubleshooting

### Video Not Playing
- Verify the YouTube embed URL is correct
- Check that the URL starts with `https://www.youtube.com/embed/`
- Ensure the video is public on YouTube

### Lab Not Appearing
- Check that the JSON syntax is valid (use a JSON validator)
- Ensure all required fields are present: `id`, `title`, `courseCode`, `topics`
- Verify the file is saved as `data/labs.json`

### Styling Issues
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that all CSS classes are valid Tailwind classes

## Best Practices

1. **Use Descriptive Names** - Make topic names clear and specific
2. **Organize Topics Logically** - Order topics from beginner to advanced
3. **Test Videos** - Verify all YouTube links work before publishing
4. **Keep IDs Unique** - Use unique IDs for each lab and topic
5. **Use Consistent Formatting** - Follow the existing JSON structure
6. **Add Multiple Topics** - Each lab should have 3-5 topics for comprehensive learning

## Support
For issues or questions, refer to the main README or contact the GDG team.
