# Tutaj będzie opis do drugiej lekcji, ale...

## ... jest praca domowa!

W repozytorium znajdziesz solucję o nazwie **homework02-task01**.

W solucji znajdziemy lekko zmodyfikowany kod zaprezentowany w drugim przykładzie. Wygląda on następująco:

``` c
#include <stdio.h>
#include <stdlib.h>

int main()
{
	// Implement data validation!
	// Age must be an integer in range <0;150>
	// What happens if you cause a buffer overflow (that is to say that, you enter a character string larger than 35 characters)?
	// Force may be with you! Good luck!

	char name[35] = { 0 };
	char myName[] = "Alice"; // char myName[] = {'A', 'l', 'i', 'c', 'e'}; lub char* myName = "Alice";
	int age = 0;
	printf("Hi, I'm %s! What's your name?: ", myName);
	scanf_s("%s", name, sizeof(name));

	printf("Hi %s! How old are you? ", name);
	scanf_s("%i", &age);
	

	if (age < 18)
	{
		printf("This content is not available for you! Sorry, dude!\n");
		printf("Returning -1!\n");
		system("pause");
		return -1;
	}
	else if (age > 150)
	{
		printf("YYyhmm??\n");
		return 0x029A;
	}
	else
	{
		printf("Ok, You're in!\n");
	}

	system("pause");
	return 0;
}
```

Tak jak opisałem wyżej, należy zaimplementować walidacje wprowadzanych danych. Nie można dopuścić do sytuacji takiej, że użytkownik wprowadza wiek większy od 150 lat i mniejszy od 0. Zwróć uwagę, że w takiej sytuacji fragment ``else if...`` jest zbędny.

W przypadku podania błędnych danych, użytkownik proszony jest o ich ponowne wprowadzanie tak długo, aż wpisze je poprawnie. :)

Pamiętaj także o czyszczeniu bufora wejściowego ``stdin``. **POWODZENIA!**