export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    // ... existing block type ...
    // ... existing image type ...
    {
      type: 'object',
      name: 'youtube',
      title: 'YouTube Embed',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'YouTube URL'
        },
      ]
    },
  ],
}