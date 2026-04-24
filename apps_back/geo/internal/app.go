package internal

import (
	"fmt"

	"log/slog"
	"net/http"

	"geo/internal/config"

	"github.com/Piloswine1/gadgeto/tonic"
	"github.com/gin-gonic/gin"
)

import (
    "time"

    "github.com/gin-contrib/cors"
)

func LaunchHttp() {
	engine := gin.New()

	config.GetLogger()
	engine.Use(config.HandleOptions)
	engine.Use(cors.New(cors.Config{
    AllowOrigins: []string{"http://localhost:5173"},
    AllowMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
    AllowHeaders: []string{"Origin", "Content-Type", "Authorization"},
    AllowCredentials: true,
    MaxAge: 12 * time.Hour,
}))

	tonic.SetErrorHook(config.ErrHook)
	fizzEngine := config.InitFizz(engine)

	g := fizzEngine.Group("/v1", "v1", "v1 group")
	CollectRoutes(g)

	addr := ":8080"
	slog.Info("starting",
		"addr", addr)
	srv := &http.Server{
		Addr:    addr,
		Handler: fizzEngine,
	}

	err := srv.ListenAndServe()
	if err != nil {
		fmt.Println(err)
		return
	}
}
