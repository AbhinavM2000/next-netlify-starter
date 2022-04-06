function View() {
    return(
        <main className="mainvideo">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/_zQqN5OYCCM" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
            >
            </iframe>
            <div id="videos">
                <h1 id="title">Episodes</h1>
                <div id="eps"></div>
            </div>
            <div id="anime"></div>
        </main>
    )
}
