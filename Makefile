.PHONY: up down logs backend frontend

up:
	docker compose up --build

down:
	docker compose down

logs:
	docker compose logs -f

backend:
	cd backend && uvicorn app.main:app --reload --port 8000

frontend:
	cd frontend && npm run dev
