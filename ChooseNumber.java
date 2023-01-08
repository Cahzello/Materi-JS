import java.util.Random;

public class ChooseNumber {
    public static void main(String[] args) {
        Random random = new Random();
        int number = random.nextInt(100) + 1;  // choose a number between 1 and 100
        System.out.println("The number is: " + number);
    }
}
