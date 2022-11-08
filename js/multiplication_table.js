const multiplication_table = [
  // >>1
  {
    id: 1,
    mult1: 1,
    mult2: 1,
    v1: 1,
    v2: 3,
    v3: 4,
    v4: 2,
    correct: 0,
  },
  {
    id: 2,
    mult1: 1,
    mult2: 2,
    v1: 1,
    v2: 3,
    v3: 4,
    v4: 2,
    correct: 0,
  },
  {
    id: 3,
    mult1: 1,
    mult2: 3,
    v1: 1,
    v2: 3,
    v3: 4,
    v4: 2,
    correct: 0,
  },
  {
    id: 4,
    mult1: 1,
    mult2: 4,
    v1: 1,
    v2: 3,
    v3: 4,
    v4: 2,
    correct: 0,
  },
  {
    id: 5,
    mult1: 1,
    mult2: 5,
    v1: 5,
    v2: 3,
    v3: 6,
    v4: 2,
    correct: 0,
  },
  {
    id: 6,
    mult1: 1,
    mult2: 6,
    v1: 5,
    v2: 3,
    v3: 4,
    v4: 6,
    correct: 0,
  },
  {
    id: 7,
    mult1: 1,
    mult2: 7,
    v1: 6,
    v2: 3,
    v3: 7,
    v4: 5,
    correct: 0,
  },
  {
    id: 8,
    mult1: 1,
    mult2: 8,
    v1: 6,
    v2: 8,
    v3: 9,
    v4: 7,
    correct: 0,
  },
  {
    id: 9,
    mult1: 1,
    mult2: 9,
    v1: 7,
    v2: 9,
    v3: 8,
    v4: 6,
    correct: 0,
  },
  // >>2
  {
    id: 10,
    mult1: 2,
    mult2: 1,
    v1: 1,
    v2: 3,
    v3: 4,
    v4: 2,
    correct: 0,
  },
  {
    id: 11,
    mult1: 2,
    mult2: 2,
    v1: 1,
    v2: 3,
    v3: 4,
    v4: 5,
    correct: 0,
  },
  {
    id: 12,
    mult1: 2,
    mult2: 3,
    v1: 6,
    v2: 3,
    v3: 4,
    v4: 8,
    correct: 0,
  },
  {
    id: 13,
    mult1: 2,
    mult2: 4,
    v1: 10,
    v2: 6,
    v3: 4,
    v4: 8,
    correct: 0,
  },
  {
    id: 14,
    mult1: 2,
    mult2: 5,
    v1: 10,
    v2: 8,
    v3: 14,
    v4: 12,
    correct: 0,
  },
  {
    id: 15,
    mult1: 2,
    mult2: 6,
    v1: 10,
    v2: 16,
    v3: 14,
    v4: 12,
    correct: 0,
  },
  {
    id: 16,
    mult1: 2,
    mult2: 7,
    v1: 16,
    v2: 18,
    v3: 14,
    v4: 12,
    correct: 0,
  },
  {
    id: 17,
    mult1: 2,
    mult2: 8,
    v1: 16,
    v2: 18,
    v3: 14,
    v4: 12,
    correct: 0,
  },
  {
    id: 18,
    mult1: 2,
    mult2: 9,
    v1: 16,
    v2: 18,
    v3: 14,
    v4: 12,
    correct: 0,
  },
  // >>3
  {
    id: 19,
    mult1: 3,
    mult2: 1,
    v1: 1,
    v2: 3,
    v3: 4,
    v4: 2,
    correct: 0,
  },
  {
    id: 20,
    mult1: 3,
    mult2: 2,
    v1: 6,
    v2: 3,
    v3: 4,
    v4: 5,
    correct: 0,
  },
  {
    id: 21,
    mult1: 3,
    mult2: 3,
    v1: 8,
    v2: 9,
    v3: 6,
    v4: 10,
    correct: 0,
  },
  {
    id: 22,
    mult1: 3,
    mult2: 4,
    v1: 12,
    v2: 9,
    v3: 13,
    v4: 10,
    correct: 0,
  },
  {
    id: 23,
    mult1: 3,
    mult2: 5,
    v1: 12,
    v2: 13,
    v3: 14,
    v4: 15,
    correct: 0,
  },
  {
    id: 24,
    mult1: 3,
    mult2: 6,
    v1: 18,
    v2: 13,
    v3: 14,
    v4: 20,
    correct: 0,
  },
  {
    id: 25,
    mult1: 3,
    mult2: 7,
    v1: 18,
    v2: 23,
    v3: 20,
    v4: 21,
    correct: 0,
  },
  {
    id: 26,
    mult1: 3,
    mult2: 8,
    v1: 16,
    v2: 18,
    v3: 24,
    v4: 22,
    correct: 0,
  },
  {
    id: 27,
    mult1: 3,
    mult2: 9,
    v1: 18,
    v2: 29,
    v3: 24,
    v4: 27,
    correct: 0,
  },
  // >>4
  {
    id: 28,
    mult1: 4,
    mult2: 1,
    v1: 5,
    v2: 3,
    v3: 4,
    v4: 2,
    correct: 0,
  },
  {
    id: 29,
    mult1: 4,
    mult2: 2,
    v1: 8,
    v2: 6,
    v3: 4,
    v4: 9,
    correct: 0,
  },
  {
    id: 30,
    mult1: 4,
    mult2: 3,
    v1: 12,
    v2: 13,
    v3: 4,
    v4: 8,
    correct: 0,
  },
  {
    id: 31,
    mult1: 4,
    mult2: 4,
    v1: 16,
    v2: 12,
    v3: 14,
    v4: 20,
    correct: 0,
  },
  {
    id: 32,
    mult1: 4,
    mult2: 5,
    v1: 18,
    v2: 30,
    v3: 24,
    v4: 20,
    correct: 0,
  },
  {
    id: 33,
    mult1: 4,
    mult2: 6,
    v1: 18,
    v2: 32,
    v3: 24,
    v4: 20,
    correct: 0,
  },
  {
    id: 34,
    mult1: 4,
    mult2: 7,
    v1: 14,
    v2: 30,
    v3: 24,
    v4: 28,
    correct: 0,
  },
  {
    id: 35,
    mult1: 4,
    mult2: 8,
    v1: 18,
    v2: 32,
    v3: 40,
    v4: 28,
    correct: 0,
  },
  {
    id: 36,
    mult1: 4,
    mult2: 9,
    v1: 32,
    v2: 36,
    v3: 33,
    v4: 38,
    correct: 0,
  },
  // >>5
  {
    id: 37,
    mult1: 5,
    mult2: 1,
    v1: 5,
    v2: 3,
    v3: 4,
    v4: 6,
    correct: 0,
  },
  {
    id: 38,
    mult1: 5,
    mult2: 2,
    v1: 10,
    v2: 12,
    v3: 5,
    v4: 2,
    correct: 0,
  },
  {
    id: 39,
    mult1: 5,
    mult2: 3,
    v1: 15,
    v2: 20,
    v3: 14,
    v4: 12,
    correct: 0,
  },
  {
    id: 40,
    mult1: 5,
    mult2: 4,
    v1: 15,
    v2: 30,
    v3: 24,
    v4: 20,
    correct: 0,
  },
  {
    id: 41,
    mult1: 5,
    mult2: 5,
    v1: 15,
    v2: 30,
    v3: 20,
    v4: 25,
    correct: 0,
  },
  {
    id: 42,
    mult1: 5,
    mult2: 6,
    v1: 15,
    v2: 30,
    v3: 40,
    v4: 25,
    correct: 0,
  },
  {
    id: 43,
    mult1: 5,
    mult2: 7,
    v1: 15,
    v2: 35,
    v3: 40,
    v4: 25,
    correct: 0,
  },
  {
    id: 44,
    mult1: 5,
    mult2: 8,
    v1: 30,
    v2: 35,
    v3: 40,
    v4: 25,
    correct: 0,
  },
  {
    id: 45,
    mult1: 5,
    mult2: 9,
    v1: 40,
    v2: 35,
    v3: 45,
    v4: 25,
    correct: 0,
  },
  // >>6
  {
    id: 46,
    mult1: 6,
    mult2: 1,
    v1: 6,
    v2: 3,
    v3: 4,
    v4: 5,
    correct: 0,
  },
  {
    id: 47,
    mult1: 6,
    mult2: 2,
    v1: 12,
    v2: 13,
    v3: 14,
    v4: 10,
    correct: 0,
  },
  {
    id: 48,
    mult1: 6,
    mult2: 3,
    v1: 18,
    v2: 23,
    v3: 14,
    v4: 20,
    correct: 0,
  },
  {
    id: 49,
    mult1: 6,
    mult2: 4,
    v1: 18,
    v2: 30,
    v3: 24,
    v4: 22,
    correct: 0,
  },
  {
    id: 50,
    mult1: 6,
    mult2: 5,
    v1: 18,
    v2: 30,
    v3: 24,
    v4: 32,
    correct: 0,
  },
  {
    id: 51,
    mult1: 6,
    mult2: 6,
    v1: 32,
    v2: 36,
    v3: 40,
    v4: 24,
    correct: 0,
  },
  {
    id: 52,
    mult1: 6,
    mult2: 7,
    v1: 40,
    v2: 36,
    v3: 42,
    v4: 44,
    correct: 0,
  },
  {
    id: 53,
    mult1: 6,
    mult2: 8,
    v1: 48,
    v2: 36,
    v3: 42,
    v4: 38,
    correct: 0,
  },
  {
    id: 54,
    mult1: 6,
    mult2: 9,
    v1: 52,
    v2: 38,
    v3: 54,
    v4: 49,
    correct: 0,
  },
  // >>7
  {
    id: 55,
    mult1: 7,
    mult2: 1,
    v1: 8,
    v2: 7,
    v3: 4,
    v4: 2,
    correct: 0,
  },
  {
    id: 56,
    mult1: 7,
    mult2: 2,
    v1: 12,
    v2: 7,
    v3: 14,
    v4: 2,
    correct: 0,
  },
  {
    id: 57,
    mult1: 7,
    mult2: 3,
    v1: 21,
    v2: 23,
    v3: 14,
    v4: 18,
    correct: 0,
  },
  {
    id: 58,
    mult1: 7,
    mult2: 4,
    v1: 24,
    v2: 30,
    v3: 44,
    v4: 28,
    correct: 0,
  },
  {
    id: 59,
    mult1: 7,
    mult2: 5,
    v1: 15,
    v2: 35,
    v3: 14,
    v4: 25,
    correct: 0,
  },
  {
    id: 60,
    mult1: 7,
    mult2: 6,
    v1: 38,
    v2: 37,
    v3: 41,
    v4: 42,
    correct: 0,
  },
  {
    id: 61,
    mult1: 7,
    mult2: 7,
    v1: 47,
    v2: 39,
    v3: 49,
    v4: 51,
    correct: 0,
  },
  {
    id: 62,
    mult1: 7,
    mult2: 8,
    v1: 49,
    v2: 56,
    v3: 48,
    v4: 54,
    correct: 0,
  },
  {
    id: 63,
    mult1: 7,
    mult2: 9,
    v1: 61,
    v2: 63,
    v3: 54,
    v4: 58,
    correct: 0,
  },
  // >>8
  {
    id: 64,
    mult1: 8,
    mult2: 1,
    v1: 8,
    v2: 3,
    v3: 4,
    v4: 2,
    correct: 0,
  },
  {
    id: 65,
    mult1: 8,
    mult2: 2,
    v1: 16,
    v2: 13,
    v3: 14,
    v4: 20,
    correct: 0,
  },
  {
    id: 66,
    mult1: 8,
    mult2: 3,
    v1: 12,
    v2: 18,
    v3: 14,
    v4: 24,
    correct: 0,
  },
  {
    id: 67,
    mult1: 8,
    mult2: 4,
    v1: 18,
    v2: 30,
    v3: 32,
    v4: 24,
    correct: 0,
  },
  {
    id: 68,
    mult1: 8,
    mult2: 5,
    v1: 42,
    v2: 30,
    v3: 40,
    v4: 24,
    correct: 0,
  },
  {
    id: 69,
    mult1: 8,
    mult2: 6,
    v1: 44,
    v2: 32,
    v3: 48,
    v4: 38,
    correct: 0,
  },
  {
    id: 70,
    mult1: 8,
    mult2: 7,
    v1: 56,
    v2: 48,
    v3: 54,
    v4: 62,
    correct: 0,
  },
  {
    id: 71,
    mult1: 8,
    mult2: 8,
    v1: 72,
    v2: 62,
    v3: 64,
    v4: 68,
    correct: 0,
  },
  {
    id: 72,
    mult1: 8,
    mult2: 9,
    v1: 64,
    v2: 74,
    v3: 68,
    v4: 72,
    correct: 0,
  },
  // >>9
  {
    id: 73,
    mult1: 9,
    mult2: 1,
    v1: 9,
    v2: 8,
    v3: 4,
    v4: 1,
    correct: 0,
  },
  {
    id: 74,
    mult1: 9,
    mult2: 2,
    v1: 18,
    v2: 19,
    v3: 9,
    v4: 20,
    correct: 0,
  },
  {
    id: 75,
    mult1: 9,
    mult2: 3,
    v1: 29,
    v2: 24,
    v3: 30,
    v4: 27,
    correct: 0,
  },
  {
    id: 76,
    mult1: 9,
    mult2: 4,
    v1: 39,
    v2: 36,
    v3: 40,
    v4: 28,
    correct: 0,
  },
  {
    id: 77,
    mult1: 9,
    mult2: 5,
    v1: 44,
    v2: 39,
    v3: 45,
    v4: 49,
    correct: 0,
  },
  {
    id: 78,
    mult1: 9,
    mult2: 6,
    v1: 54,
    v2: 36,
    v3: 49,
    v4: 56,
    correct: 0,
  },
  {
    id: 79,
    mult1: 9,
    mult2: 7,
    v1: 72,
    v2: 63,
    v3: 54,
    v4: 68,
    correct: 0,
  },
  {
    id: 80,
    mult1: 9,
    mult2: 8,
    v1: 68,
    v2: 78,
    v3: 64,
    v4: 72,
    correct: 0,
  },
  {
    id: 81,
    mult1: 9,
    mult2: 9,
    v1: 81,
    v2: 79,
    v3: 78,
    v4: 83,
    correct: 0,
  },
];
