from pydantic import BaseSettings


class CommonSettings(BaseSettings):
    APP_NAME: str = "FARM Intro"
    DEBUG_MODE: bool = True


class ServerSettings(BaseSettings):
    HOST: str = "127.0.0.1"
    PORT: int = 8000


class DatabaseSettings(BaseSettings):
    DB_URL: str = "mongodb+srv://nghiango:Nghia385685@cluster0.kd12g.mongodb.net/tododb?retryWrites=true&w=majority"
    DB_NAME: str = "TODO"


class Settings(CommonSettings, ServerSettings, DatabaseSettings):
    pass


settings = Settings()
