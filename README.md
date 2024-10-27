# String Calculator Kata

Una implementación de la String Calculator Kata usando TypeScript, Jest y TCR (Test && Commit || Revert).

## 🎯 Descripción

Este proyecto implementa una calculadora que procesa strings siguiendo la kata de Roy Osherove, utilizando TDD y el workflow TCR. La kata consiste en una serie de pasos incrementales que simulan requisitos empresariales reales.

Para ver los pasos detallados de la kata, visita la [guía completa en Exeal](https://www.exeal.com/katas/string-calculator-kata/).

## 🛠️ Tecnologías

- TypeScript
- Jest para testing
- TCR (Test && Commit || Revert) como workflow

## 📋 Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/[usuario]/string-calculator-kata.git

# Instalar dependencias
npm install
```

## 🧪 Test con TCR

```bash
npm test
```

Este comando ejecutará los tests y:
- Si pasan: hace commit automáticamente
- Si fallan: revierte los cambios al último commit exitoso

## 📝 Licencia

MIT

## 🙏 Créditos

- Kata original por [Roy Osherove](https://osherove.com/tdd-kata-1/)
