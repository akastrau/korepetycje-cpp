# Pierwsze koty za płoty... czyli nasza pierwsza aplikacja napisana w języku C

## Jak zacząć

W Visual Studio tworzymy nowy projekt C++. Wybieramy **Empty Project**. Po utworzeniu nowego projektu musimy utworzyć nowy plik (niech to będzie plik **Source.c**). Rozszerzenie **.c** mówi nam o tym, że nasz kod źródłowy będzie pisany w języku C.

<center><img src="/img/hackerman-c.jpg" alt="Hackerman" width="60%" height="60%"></center>
<center>Źródło: http://devhumor.com/media/i-can-write-quot-hello-world-quot-in-c</center>

## No to jazda, jazda, jazda, trójkąt, gwiazda!

Napiszmy:
``` c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int variable = 4;
    printf("Hello! Your number is %i!\n", variable);

    system("pause");
    return 0;
}
```

Co tutaj się stało? W pierwszej linijce napisalismy `#include <stdio.h>`. Oznacza to, że kompilator dołączy za nas biblioteke **stdio.h**. W drugiej zaś biblioteke **stdlib.h**.

Dlaczego te biblioteki dołączyliśmy? Pierwsza z nich to *STanDard Input Output library*. Znajdziemy w niej podstawowe funkcje wejścia/wyjścia (takie jak wypisywanie tekstu na ekran). Z kolei **stdlib.h** to *STanDard LIBrary*. Znajdziemy w niej postawowe stałe i makra takie jak `EXIT_SUCCESS`.

!!! tip "Ciekawostka"
    Makro `EXIT_SUCCESS` to pewna stała.
    W bibliotece standardowej stała `EXIT_SUCCESS` przyjmuje wartość `0`
    Istnieje także makro `EXIT_FAILURE`, które definiuje wartość `1`.

## Funkcja main - punkt startowy naszej aplikacji

Aby nasz program mógł się uruchomić, kompilator musi wiedzieć w jakim miejscu zaczyna wykonywać się nasza aplikacja. Takim miejscem jest funcja **main**. O funkcjach opowiemy sobie w innej lekcji. Na tym etapie zwróć uwage na definicje naszej funkcji startowej:

``` c
int main()
{
    // To jest nasza funkcja glowna
    return jakas_liczba;
}
```

Co oznacza słówko kluczowe **int**? Oznacza to tyle, że funkcja po zakończeniu swojego działania zwraca typ zmiennej typu **int**. O typach zmiennych opowiemy sobie za moment.

## No dobra! Mam funkcje main i co dalej?

Przyjrzyjmy się jeszcze raz na nasz kod źródłowy z początku lekcji. 

W linii numer 6 zadeklarowaliśmy zmienną typu **int** o nazwie **variable**. Dzięki takiej deklaracji możemy użyć naszej zmiennej w obrębie naszej funkcji (jest to zmienna lokalna). 

W kolejnej linijce użyliśmy funkcji wbudowanej ``printf()`` (printf to skrót od *print formatted*). Wyświetla ona sformatowany tekst. Spójrzmy na pierwszy argument, który wchodzi do naszej funkcji:
``"Hello! Your number is %i!\n"``. Jest to tekst, który zostanie wyświetlony na ekranie. `%i` oznacza, że kompilator podstawi tu zmienną typu **int**. `\n` na końcu naszego tekstu oznacza znak nowej linii (z ang. *newline*). Jako drugi argument w funkcji `printf()` podaliśmy zmienną **variable**. Dzięki temu funkcja `printf()` podstawi wartość zmiennej pod `%i`.

W linii numer 8 użyliśmy funkcji `system()`. Funkcja ta wywołuje polecenie systemowe (w naszym przypadku jest to polecenie `pause`, które zatrzymuje działanie naszego programu i oczekuje na wciśnięcie dowolnego klawisza). Niestety polecenie `pause` działa tylko w systemach Windows. W przypadku innych systemów musimy użyć innego rozwiązania, żeby zatrzymać działanie programu.

W ostatniej linii napisaliśmy `return 0` co oznacza, że program zwróci liczbe 0 po zakończeniu działania.

## Kilka słów o typach w C

Mamy klika rodzajów zmiennych. Są to zmienne:
- typu **int**, czyli liczby całkowite 32-bitowe,
- typu **float**, czyli liczby zmiennoprzecinkowe pojedyńczej precyzji,
- typu **double**, czyli liczby zmiennoprzecinkowe podwójnej precyzji,
- typu **char**, czyli znak/litera lub **char*** w przypadku łancuchu znaków, czyli tekstu.

Oczywiście mamy jeszcze wariant ze słowem **long**, ale na tym etapie nie będę o nim wspominać.

!!! note "Więcej o typach podstawowych"
    Więcej informacji na temat typów podstawowych znajdziesz na przykład [tu](https://msdn.microsoft.com/en-us/library/cc953fe1.aspx).

## Funkcja printf()

Przy wywołaniu funkcji `printf()` skorzystaliśmy z `%i`. Jest to tzw. *format specifier*. Na podstawie dokumentacji z [cplusplus.com](cplusplus.com/reference/) wymienimy kilka dostępnych formatów wyświetlanych danych. Między innymi są to:
- `%i` lub `%d` dla liczb typu całkowitego,
- `%f` dla liczby zmiennoprzecinkowych,
- `%c` dla pojedynczego znaku,
- `%s` dla łańcucha znaku.

W funkcji `printf()` można użyć specjalnych znaków za pomocą `\` (przykład `\n`). Zachęcam do poczytania dokumentacji tej funkcji.

## Na zakończenie - return ITS_THE_END

Słówko kluczowe `return` w funkcji `main()` wykorzystujemy po to, aby zasygnalizować stan wykonania naszego programu. Zwykle zwraca się:
- `0`, gdy program zakończył sie poprawnie,
- `1` lub liczbe ujemną gdy program zakończył się porażką.

## Praktyka czyni mistrza... czyli zadania do zrobienia

Kod do zadania wygląda następująco:
``` c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    const float pi = 3.14159265;
    char text[] = "Some text here";
    int number = 1246754;
    double numerical_value = 2674.3236434664311;

    // Uzupelnij kod

    system("pause");
    return EXIT_SUCCESS;
}
```

Zadania:

1. Wyświetl liczbe pi z dokładnością do trzeciego miejsca po przecinku,
2. Wyświetl znak 1, 3 i 8 z łancucha **text**,
3. Wyświetli liczbe **number** zaokrąglając ją do piątego miejsca,
4. Wyświetl liczbę **numerical_value** w następujący sposób:
    - część całkowitą zaokrąglij do drugiego miejsca,
    - część ułamkową zaokrąglij do ósmego miejsca po przecinku.
