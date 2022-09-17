FROM node:18.3.0

COPY . .

RUN npm install

RUN npm install @mui/material @emotion/react @emotion/styled

RUN npm install recharts

EXPOSE 3000

CMD ["npm", "start"]