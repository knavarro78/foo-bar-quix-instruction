package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {

    fun convertNumber(inputNumber: Int): String {
        var result = ""
        result += perform(inputNumber, 3, "3".single(), "Foo")
        result += perform(inputNumber, 5, "5".single(), "Bar")
        result += perform(inputNumber, 0, "7".single(), "Quix")
        if (result.isBlank()) {
            result += inputNumber.toString()
        }
        return result;
    }

    private fun perform(number: Int, by: Int, occurence: Char, replacer: String): String {
        val s = number.toString()
        var result = "";
        if (by != 0 && number % by == 0) {
            result += replacer
        }
        for (i in s.indices) {
            if (s[i] == occurence) {
                result += replacer
            }
        }
        return result;
    }
}