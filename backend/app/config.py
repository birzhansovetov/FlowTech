from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "FlowTech API"
    app_env: str = "development"
    database_url: str = "sqlite+aiosqlite:///./flowtech.db"
    frontend_origin: str = "http://localhost:3000"
    admin_api_key: str = "change-this-admin-key"
    telegram_bot_token: str | None = None
    telegram_chat_id: str | None = None
    openai_api_key: str | None = None

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")


settings = Settings()
