import { promises as fs } from 'fs';
import * as path from 'path';

export async function clearAllFiles(dirPath: string): Promise<void> {
    try {
        const files = await fs.readdir(dirPath);

        const deletePromises = files.map(async (file) => {
            const filePath = path.join(dirPath, file);
            await fs.unlink(filePath); // Delete the file without checking its type
            console.log(`Deleted file: ${filePath}`);
        });

        await Promise.all(deletePromises); // Wait for all delete operations to complete
    } catch (err) {
        console.error('Error clearing files:', err);
    }
}