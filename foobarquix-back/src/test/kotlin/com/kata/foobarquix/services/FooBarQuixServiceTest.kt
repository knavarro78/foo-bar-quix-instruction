package com.kata.foobarquix.services

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class FooBarQuixServiceTest {

    private var fooBarQuixService: FooBarQuixService = FooBarQuixService()

    @Test
    fun shouldReturn1_whenConvertNumber_with1AsInput() {
        val expected = "1"
        assertEquals(expected, fooBarQuixService.convertNumber(1))
    }

    @Test
    fun shouldReturnBarBar_whenConvertNumber_with5AsInput() {
        val expected = "BarBar"
        assertEquals(expected, fooBarQuixService.convertNumber(5))
    }

    @Test
    fun shouldReturnQuix_whenConvertNumber_with7AsInput() {
        val expected = "Quix"
        assertEquals(expected, fooBarQuixService.convertNumber(7))
    }

    @Test
    fun shouldReturnFooQuix_whenConvertNumber_with3AsInput() {
        val expected = "FooQuix"
        assertEquals(expected, fooBarQuixService.convertNumber(27))
    }

    @Test
    fun shouldReturnFooBarBar_whenConvertNumber_with15AsInput() {
        val expected = "FooBarBar"
        assertEquals(expected, fooBarQuixService.convertNumber(15))
    }
}