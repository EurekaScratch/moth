## `mediaSessionAPI.js`

这是 navigator.mediaSession 的 sc 块形式的封装，让 sc 作品可基本使用浏览器 Media Session 能力。

**[进一步了解Media Session API](https://web.dev/articles/media-session?hl=zh-cn)**


开发参考：   
https://web.dev/articles/media-session?hl=zh-cn  
https://developer.mozilla.org/zh-CN/docs/Web/API/MediaSession  
https://w3c.github.io/mediasession/#the-mediasession-interface
### 有空会搞的TODO  
- [ ] 功能：可选播放无声音频的<audio>元素以在 使用一些不用<audio>标签播放音乐的 音乐拓展时（例如原生sc音频模块、Clipccext-LazyLoad）也能让 Media Session 显示出来

### 大概有用户明确需要才可能会搞的TODO  
- [ ] providing multiple artwork images in the metadata can let the user agent be able to select different artwork images for different display purposes and better fit for different screens. [link](https://w3c.github.io/mediasession/#examples)
- [ ] 能力有限：使用户控制事件帽子块可接收 details 参数，这样可以使得"seekto"（跳转至特定时间）操作可用，还能接收 快退/快进 传来的 seekOffset 值