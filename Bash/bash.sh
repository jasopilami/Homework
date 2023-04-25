#Aufgabe 1

#!/bin/bash

if [ -e /etc/resolv.conf ]; then
  echo "Die Datei /etc/resolv.conf ist vorhanden."
else
  echo "Die Datei /etc/resolv.conf ist nicht vorhanden."
fi

#Aufgabe 2

if [ -d "/etc/default" ]; then
  if [ -e "/etc/default/pam.conf" ]; then
    echo "Die Datei /etc/default/pam.conf ist vorhanden."
  else
    echo "Die Datei /etc/default/pam.conf ist nicht vorhanden."
    echo "Suche nach der Datei in /etc/..."
    find /etc/ -name "pam.conf" 2>/dev/null
  fi
else
  echo "Der Ordner /etc/default existiert nicht."
fi

#Aufgabe 3

# Überprüfen, ob ein Argument übergeben wurde
if [ $# -eq 0 ]; then
  echo "Bitte geben Sie ein Argument ein."
  exit 1
fi

# Überprüfen, ob das Argument eine Zahl ist
if [[ $1 =~ ^[0-9]+$ ]]; then
  echo "Das Argument ist eine Zahl."

# Überprüfen, ob das Argument ein Wort ist
else
  echo "Das Argument ist ein Wort: $1"
fi

#Aufgabe 4

# Aufforderungen zur Eingabe von Name, Alter und Lieblingstechnologie
echo "Bitte geben Sie Ihren Namen ein:"
read name
echo "Bitte geben Sie Ihr Alter ein:"
read alter
echo "Bitte geben Sie Ihre Lieblingstechnologie ein:"
read technologie

# Ausgabe der Meldung mit den eingegebenen Informationen
echo "Ich bin $name und ich bin $alter Jahre alt. Meine Lieblingstechnologie ist $technologie."