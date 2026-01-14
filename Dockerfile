FROM node:22-alpine

WORKDIR /app

# 의존성 설치 단계
COPY package*.json ./
RUN npm ci

# 소스 코드 복사 및 빌드 단계
COPY . .
RUN npm run build

# 실행 단계
EXPOSE 3000

CMD ["npm", "run", "start:prod"]

